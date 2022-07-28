import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralService } from '../services/general.service';
import Swal from 'sweetalert2'
import { DateAdapter } from '@angular/material/core';
import { MatDateRangeSelectionStrategy, DateRange } from '@angular/material/datepicker';

@Injectable()
export class RangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null): DateRange<D> {
    return this._createDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createDayRange(activeDate);
  }

  private _createDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, 0);
      const end = this._dateAdapter.addCalendarDays(date, 7);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  title: string;
  dados: FormGroup;
  date = new Date();
  
  constructor(
    public service: GeneralService,
    public dialogRef: MatDialogRef<CadastroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.title = this.data.type;
    this.loadForm();
  }

  loadForm(){
    switch (this.data.type) {
      case 'Associado':
        this.dados = new FormGroup({
          nome: new FormControl(null, Validators.required),
          endereco: new FormControl(null, Validators.required),
          email: new FormControl(null, [Validators.required, Validators.email]),
          senha: new FormControl(null, Validators.required),
          status: new FormControl(null, Validators.required)
        });
        break;

      case 'Publicação':
        this.dados = new FormGroup({
          isbn: new FormControl(null, Validators.required),
          titulo: new FormControl(null, Validators.required),
          autor: new FormControl(null, [Validators.required]),
          editora: new FormControl(null, Validators.required),
        });
        break;

      case 'Exemplar':
        this.dados = new FormGroup({
          numero: new FormControl(null, Validators.required),
          isbn: new FormControl(null, Validators.required),
          preco: new FormControl(null, [Validators.required])
        });
        break;

      case 'Empréstimo':
        this.dados = new FormGroup({
          nro_exemplar: new FormControl(null, Validators.required),
          isbn: new FormControl(null, Validators.required),
          codigo_assoc: new FormControl(null, [Validators.required]),
          data_emp: new FormControl(null, [Validators.required]),
          data_devol: new FormControl(null, [Validators.required]),
        });
        break;
    }
    
  }

  submit(){
    var body;
    switch (this.data.type) {
      case 'Associado':
       body = {
          nome: this.dados.value.nome,
          endereco: this.dados.value.endereco,
          email: this.dados.value.email,
          senha: this.dados.value.senha,
          status: this.dados.value.status
        }
    
        this.service.createAssociado(body).subscribe(response => {
          if(response){
            Swal.fire({
              icon: 'success',
              title: 'Cadastro realizado com sucesso!',
            });
    
            this.dialogRef.close();
          }
        });
        break;

      case 'Publicação':
        body = {
          isbn: this.dados.value.isbn,
          titulo: this.dados.value.titulo,
          autor: this.dados.value.autor,
          editora: this.dados.value.editora
        }
    
        this.service.createPublicacao(body).subscribe(response => {
          if(response){
            Swal.fire({
              icon: 'success',
              title: 'Cadastro realizado com sucesso!',
            });
    
            this.dialogRef.close();
          }
        });
        break;

      case 'Exemplar':
        body = {
          numero: this.dados.value.numero,
          isbn: this.dados.value.isbn,
          preco: this.dados.value.preco,
        }
    
        this.service.createExemplar(body).subscribe(response => {
          if(response){
            Swal.fire({
              icon: 'success',
              title: 'Cadastro realizado com sucesso!',
            });
    
            this.dialogRef.close();
          } else (
            Swal.fire({
              icon: 'error',
              title: 'Houve um erro ao realizar o cadastro.',
            })
          )
        });
        break;

      case 'Empréstimo':
        body = {
          nro_exemplar: this.dados.value.nro_exemplar,
          isbn: this.dados.value.isbn,
          associado: this.dados.value.associado,
          data_emp: this.dados.value.data_emp,
          data_devol: this.dados.value.data_devol,
          codigo_assoc: this.dados.value.codigo_assoc
        }

        console.log(this.dados.value.data_emp)
    
        this.service.createEmprestimo(body).subscribe(response => {
          if(response){
            Swal.fire({
              icon: 'success',
              title: 'Cadastro realizado com sucesso!',
            });
    
            this.dialogRef.close();
          }
        });
        break;
    }
  }

  close(){
    this.dialogRef.close();
  }
}
