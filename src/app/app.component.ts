import { Component } from '@angular/core';
import { MockedData } from '../mock-data/indexcardlist'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Gift CardZZZ';
  testgradient = "https://res.cloudinary.com/practicaldev/image/fetch/s--F7w_snYb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vda3askm2sbfjl717q9q.png"
  GiftCardsList = MockedData;
}
