import { Injectable } from '@angular/core'
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class InfoService {
 
 /* biblioteca = 
  [
    {"songs":[{"title":"FAMILY DOLLAR","duration":"1:00"},{"title":"Nicotine","duration":"3:00"},{"title":"Bupropion Hydrochloride","duration":"59:00"},{"title":"BAUME PRODIGIEUX LEVRES 01 NATURAL CRYSTAL","duration":"3:00"},{"title":"Oil Free Acne Wash","duration":"3:00"},{"title":"HAND SANITIZING","duration":"2:54"},{"title":"Nadolol","duration":"2:00"},{"title":"Anti-Bacterial Hand","duration":"1:00"},{"title":"Levofloxacin","duration":"1:30"}],"author":"Henka Crewes","album":"Thiel-Predovic","gender":"Thriller","image":"https://robohash.org/nonenimut.png?size=250x250&set=set1"},
    {"songs":[{"title":"Aveeno Positively Ageless","duration":"1:00"},{"title":"Pac-Dent Top Gel","duration":"3:00"},{"title":"Levetiracetam","duration":"2:54"},{"title":"Glytone Suncare block sunscreen","duration":"1:00"},{"title":"Terazosin","duration":"59:00"},{"title":"Sumatriptan Succinate","duration":"2:54"},{"title":"OXYGEN","duration":"1:30"},{"title":"KROGER","duration":"3:00"},{"title":"Mirapex","duration":"3:00"},{"title":"Benazepril Hydrochloride","duration":"1:30"}],"author":"Carie Larkings","album":"Bradtke, Hahn and Raynor","gender":"Drama|Romance","image":"https://robohash.org/iuresiteius.png?size=250x250&set=set1"},
    {"songs":[{"title":"Cold and Flu","duration":"3:00"},{"title":"Candida Heavy Metal Detox","duration":"2:00"},{"title":"Intense Care Snail","duration":"2:00"},{"title":"Bang Er Jie High-Efficiency Anti-Bacteria Monomer Silver Gel for Women","duration":"3:00"},{"title":"Instant Hand Sanitizer","duration":"2:00"},{"title":"Cortizone 10 Easy Relief","duration":"2:54"},{"title":"Oxymorphone hydrochloride","duration":"1:10"},{"title":"Mini Berry Lip Balm Cherry","duration":"2:00"},{"title":"Petroleum Jelly","duration":"1:00"}],"author":"Lynnette Mogie","album":"Rosenbaum-Cronin","gender":"Documentary","image":"https://robohash.org/adipiscivitaeest.png?size=250x250&set=set1"},
    {"songs":[{"title":"Avon Sun Sport","duration":"1:30"},{"title":"Ambien CR","duration":"1:10"},{"title":"Cyclobenzaprine Hydrochloride","duration":"2:00"},{"title":"CareOne NiteTime Cough","duration":"1:30"},{"title":"NARS FOUNDATION","duration":"1:30"},{"title":"Opahl","duration":"2:00"},{"title":"Throat Care","duration":"3:00"},{"title":"SINEMET","duration":"1:00"},{"title":"Triple Antibiotic","duration":"1:00"},{"title":"Levofloxacin","duration":"1:30"}],"author":"Wernher Gulston","album":"Ziemann-Fay","gender":"Drama|Thriller","image":"https://robohash.org/laudantiumnemosapiente.png?size=250x250&set=set1"},
    {"songs":[{"title":"miconazole 1","duration":"3:00"},{"title":"Hemorrhoidal","duration":"1:30"},{"title":"Tirosint","duration":"1:30"},{"title":"Hawaiian Tropic Sheer Touch","duration":"1:00"},{"title":"LANOXIN","duration":"59:00"}],"author":"Henryetta Lacrouts","album":"D'Amore and Sons","gender":"Documentary","image":"https://robohash.org/debitisiustoexcepturi.png?size=250x250&set=set1"},
    {"songs":[{"title":"health mart loratadine","duration":"1:30"},{"title":"Matzim LA","duration":"1:30"},{"title":"Sun Shades","duration":"59:00"},{"title":"Fluconazole","duration":"1:00"},{"title":"Levetiracetam","duration":"1:30"},{"title":"ADSOL Red Cell Preservation Solution System in Plastic Container (PL 146 Plastic)","duration":"2:00"},{"title":"GUNA-MOOD","duration":"59:00"},{"title":"ketoconazole","duration":"1:30"},{"title":"Ibutab","duration":"1:10"}],"author":"Haleigh Fatscher","album":"Wolff-Gerhold","gender":"Comedy|Drama","image":"https://robohash.org/quisetnecessitatibus.png?size=250x250&set=set1"},
    {"songs":[{"title":"Doxazosin","duration":"2:54"},{"title":"ZOFRAN","duration":"3:00"},{"title":"Oxygen","duration":"2:00"},{"title":"FIBERCON","duration":"1:00"},{"title":"Gabapentin","duration":"3:00"},{"title":"Hydrocodone Bitartrate and Acetaminophen","duration":"2:00"},{"title":"NABI-HB","duration":"1:00"},{"title":"Olanzapine","duration":"2:00"},{"title":"EROS AQUA SENSATIONS","duration":"2:00"},{"title":"CELTIS OCCIDENTALIS POLLEN","duration":"1:10"}],"author":"Ree Fassam","album":"Eichmann and Sons","gender":"Action|Sci-Fi|Thriller","image":"https://robohash.org/iustoquiiure.png?size=250x250&set=set1"},
    {"songs":[{"title":"Amlodipine Besylate","duration":"3:00"},{"title":"Trandolapril and Verapamil Hydrochloride","duration":"1:00"},{"title":"Levothyroxine Sodium","duration":"59:00"},{"title":"Glimepiride","duration":"2:00"},{"title":"Good Neighbor Pharmacy Vitamin A and D","duration":"1:00"},{"title":"Atorvastatin Calcium","duration":"1:10"},{"title":"Incivek","duration":"2:54"}],"author":"Titos Pren","album":"Hills, Fisher and Moen","gender":"Comedy","image":"https://robohash.org/atvelitnumquam.png?size=250x250&set=set1"},
    {"songs":[{"title":"Pitocin","duration":"1:30"},{"title":"Xylocaine","duration":"59:00"},{"title":"Topex","duration":"3:00"},{"title":"Salt Cedar","duration":"1:10"},{"title":"Savella","duration":"1:10"},{"title":"LAMICTAL","duration":"2:00"}],"author":"Roley Nelsey","album":"Boyle, Champlin and Torp","gender":"Action|Adventure|Comedy|Fantasy|Horror|Thriller","image":"https://robohash.org/velomniset.png?size=250x250&set=set1"},
    {"songs":[{"title":"4 Kids Complete Cold and Mucus","duration":"3:00"},{"title":"Additox","duration":"1:10"},{"title":"Naproxen","duration":"1:00"},{"title":"Dandruff","duration":"1:00"},{"title":"No7 Lift and Luminate Foundation Sunscreen Broad Spectrum SPF 15 Warm Ivory","duration":"59:00"},{"title":"Allergy Relief","duration":"3:00"},{"title":"Botanics Daily Hand Therapy Sunscreen SPF 10","duration":"59:00"},{"title":"ADSOL Red Cell Preservation Solution System in Plastic Container (PL 146 Plastic)","duration":"59:00"},{"title":"Naltrexone Hydrochloride","duration":"59:00"}],"author":"Lana Larroway","album":"Kertzmann, McKenzie and Lemke","gender":"Drama|Romance","image":"https://robohash.org/impeditetmolestias.png?size=250x250&set=set1"}];
   
    albunes= [];
    
    getalbum(){
     
      for(let biblioteca1 of this.biblioteca){
         this.albunes.push(biblioteca1.album);         

      }
      console.log(this.albunes)
      return this.albunes; 
      
}*/



constructor(private http: HttpClient) { 
  this.getJSON().subscribe(data => { 
   console.log(data)
  }); 
 } 

 public getJSON(): Observable<any> { 
  return this.http.get("./assets/disquera.json")
 } 

  


}

