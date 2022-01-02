export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, zoom: number, lat: number, lng: number) {
    this.googleMap = new google.maps.Map(document.getElementById(`${divId}`), {
      zoom: zoom,
      center: {
        lat: lat,
        lng: lng,
      },
    });
  }
}
