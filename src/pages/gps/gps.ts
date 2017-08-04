import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions} from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap,GoogleMapsEvent,LatLng,CameraPosition,Marker,MarkerOptions} from '@ionic-native/google-maps';

/**
 * Generated class for the GpsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html',
})
export class GpsPage {
longData; latData: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation:Geolocation, public gMaps:GoogleMaps) {
  }

  ionViewWillEnter()
{
  let options: GeolocationOptions={ enableHighAccuracy:true}

  this.geolocation.getCurrentPosition(options).then((resp)=>{console.log('resp:',resp)

}).catch((error)=>{alert(error)})

}


loadMap()
{
  let element: HTMLElement = document.getElementById('map');
  let map: GoogleMap =this.gMaps.create(element);

  map.one(GoogleMapsEvent.MAP_READY).then(
  
    ()=>{ console.log('Map is ready!');
     let watch =this.geolocation.watchPosition();
     watch.subscribe((data)=>{
       console.log('data: ',data)
       this.longData= data.coords.longitude;
       this.latData=data.coords.latitude;

       let ionic: LatLng = new LatLng(this.latData,this.longData);

       let position: CameraPosition = {

         target:ionic,
         zoom: 18,
         tilt: 30
       };
       
       map.moveCamera(position);

       let markerOption: MarkerOptions={
         position:ionic,
         title: 'Ionic'
       };

       map.addMarker(markerOption).then((marker:Marker)=>{
         marker.showInfoWindow();
       })
     });
  }
  
  );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpsPage');
  }

}
