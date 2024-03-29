import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
})
export class SearchDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<SearchDialogComponent>) {}

  ngOnInit(): void {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
