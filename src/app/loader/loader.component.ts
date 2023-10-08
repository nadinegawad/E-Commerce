import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this._loaderService.isLoading;

  constructor(private _loaderService: LoaderService) {
  }
}

