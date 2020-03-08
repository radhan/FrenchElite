import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  posts = [];
  page = 1;
  count = null;
 
  constructor(private wp: WordpressService, private loadingCtrl: LoadingController) { }
 
  ngOnInit() {
    this.loadPosts();
  }
 
  async loadPosts() {
    let loading = await this.loadingCtrl.create({
      message: 'Chargement...'
    });
    await loading.present();
 
    this.wp.getPosts().subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
      loading.dismiss();
    });
  }
 
  loadMore(event) {
    this.page++;
 
    this.wp.getPosts(this.page).subscribe(res => {
      this.posts = [...this.posts, ...res];
      event.target.complete();
 
      // Disable infinite loading when maximum reached
      if (this.page == this.wp.pages) {
        event.target.disabled = true;
      }
    });
  }
}
