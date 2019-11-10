import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  public titulo: string = 'Alert page';

  constructor(
    private alertCtr: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtr.create({
      header: 'Atención',
      subHeader: 'Esta seguro?',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtr.create({
      header: 'Cambiar titulo',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Ingresar un nuevo titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (formData) => {
            console.log('Confirm Ok', formData);
            this.titulo = formData.name1;
          }
        }
      ]
    });

    await alert.present();
  }

}
