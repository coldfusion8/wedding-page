import { Component, OnInit } from '@angular/core';
import { map, tileLayer, Map, marker, icon } from 'leaflet';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss', './location.mobile.scss']
})
export class LocationComponent implements OnInit {
    private map?: Map;

    ngOnInit(): void {
        this.initMap();
    }

    private initMap(): void {
        this.map = map('map', {
            center: [45.99188634999172, 18.69524868396951],
            zoom: 16
        });

        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(this.map);

        const customIcon = icon({
            iconUrl: 'assets/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        });

        const place = marker([45.99188634999172, 18.69524868396951], { icon: customIcon }).addTo(this.map);
        place.bindPopup('Selyemgyár').openPopup();

        const parking = marker([45.9909802005999, 18.695397091013653], { icon: customIcon }).addTo(this.map);
        parking.bindPopup('Parkoló').openPopup();

        setTimeout(() => {
            this.map?.invalidateSize();
        }, 0);
    }
}
