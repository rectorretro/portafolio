/*function saludar() {
	const coco = 'Si lo agarra';
	console.log(coco);
}
saludar();*/

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
  	  width: '20%',
  	  height: '100',
      uri: 'https://open.spotify.com/artist/4gOc8TsQed9eqnqJct2c5v?si=3vJANOKHQci0OjoTVJRsrw'
    };
  const callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};																																									
