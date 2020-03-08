import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  post: any;
 
  constructor(private route: ActivatedRoute, private wp: WordpressService) { }
 
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.wp.getPostContent(id).subscribe(res => {
      this.post = res;
    });
  }
}
