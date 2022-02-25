const shortUrl = require("node-url-shortener");
const ObjectsToCsv = require('objects-to-csv');

let arrayOfUrls= [
{url:'http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg'},
{url:'http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg'},
{url:'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg'},
{url:'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg'},
{url:'http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg'},
{url:'https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg'},
{url:'https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg'},
{url:'https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg'},{url:'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg'}
]



  
   

  // If you use "await", code must be inside an asynchronous function:
for(let i =0;i<arrayOfUrls.length;i++){
    shortUrl.short(arrayOfUrls[i].url, function (err, url) {
    let obj=[{url:url}]
    console.log(url)
    new ObjectsToCsv(obj).toDisk('./test.csv',{append:true})
       

})
}












    
   




   
 


