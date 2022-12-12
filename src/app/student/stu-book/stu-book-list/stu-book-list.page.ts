import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-stu-book-list',
  templateUrl: './stu-book-list.page.html',
  styleUrls: ['./stu-book-list.page.scss'],
})
export class StuBookListPage implements OnInit {
  libros: any = [];
  cliente;
  constructor(
    private router: Router,
    private publicacionService: PublicacionService,
  ) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    const parametro = this.cliente.id;
    this.publicacionService.getsearchPublicacionbyautor(parametro).subscribe(
      reslibros => {
        if (reslibros != null) {
          this.libros = reslibros;
        }
      }, err => {
        console.log('Error get libros con autoria de estudiante');
      }
    );
  }
  crear() {
    this.router.navigate(
      [
        'student',
        'stu-book',
        'stu-book-create'
      ]
    );
  }
  edit(dato) {
    this.router.navigate(
      [
        'student',
        'stu-book',
        'stu-book-update',
        dato
      ]
    );
  }

}
