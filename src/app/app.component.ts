import { NewsService } from './shared/news.service';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent {
    constructor(private newsService:NewsService){}
        news = [
        {    
            name:"cnn",
            image:"/images/cnn.png",
            new: "CNN"
        },
          {    
            name:"reddit-r-all",
            image:"/images/reddit.png",
            new: "Reddit"
        },
         {    
            name:"new-scientist",
            image:"/images/new-scientist.jpg",
            new: "New Scientist"
        }, {    
            name:"newsweek",
            image:"/images/newsweek.jpg",
            new: "Newsweek"
        }, 
        {    
            name:"hacker-news",
            image:"/images/hacker.jpg",
            new: "Hacker News"
        },
        {
            name:"national-geographic",
            image:"/images/natgeo.jpg",
            new: "National Geographic "
        },
          {
            name:"the-economist",
            image:"/images/economist.jpg",
            new: "The Economist"
        },
            {
            name:"techcrunch",
            image:"/images/techcrunch.jpg",
            new: "TechCrunch"
        },
          {
            name:"techradar",
            image:"/images/techradar.jpg",
            new: "Tech Radar"
        },
        {
            name:"google-news",
            image:"/images/google.jpg",
            new:"Google"
        }

        ]
   channelDatas = []
   chosen = "";
   empty(){ return this.channelDatas.length == 0 ;}
    chosenExists(){
        return this.chosen.length != 0 ;
    }
    goHome(){
        this.channelDatas = []
    }
channelClicked(channel){
    this.chosen = channel.new
    this.newsService.getNewsForSpecificChannel(channel.name)
        .then((data) => {
            let shit = data.json()
            this.channelDatas = shit.articles ;
            console.log("shit = ",shit.articles) 
        })
}
}