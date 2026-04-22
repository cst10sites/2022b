var favicon_images = [
                    'RainbowGif/frame_00_delay-0.03s.gif',
                    'RainbowGif/frame_01_delay-0.04s.gif',
                    'RainbowGif/frame_02_delay-0.03s.gif',
                    'RainbowGif/frame_03_delay-0.03s.gif',
                    'RainbowGif/frame_04_delay-0.04s.gif',
                    'RainbowGif/frame_05_delay-0.03s.gif',
                    'RainbowGif/frame_06_delay-0.03s.gif',
					'RainbowGif/frame_07_delay-0.04s.gif',
					'RainbowGif/frame_08_delay-0.03s.gif',
					'RainbowGif/frame_09_delay-0.03s.gif',
					'RainbowGif/frame_10_delay-0.04s.gif',
					'RainbowGif/frame_11_delay-0.03s.gif',
					'RainbowGif/frame_12_delay-0.03s.gif',
					'RainbowGif/frame_13_delay-0.04s.gif',
					'RainbowGif/frame_14_delay-0.03s.gif',
					'RainbowGif/frame_15_delay-0.03s.gif',
					'RainbowGif/frame_16_delay-0.04s.gif',
					'RainbowGif/frame_17_delay-0.03s.gif',
					'RainbowGif/frame_18_delay-0.03s.gif',
					'RainbowGif/frame_19_delay-0.04s.gif',
					'RainbowGif/frame_20_delay-0.03s.gif',
					'RainbowGif/frame_21_delay-0.03s.gif',
					'RainbowGif/frame_22_delay-0.04s.gif',
					'RainbowGif/frame_23_delay-0.03s.gif',
					'RainbowGif/frame_24_delay-0.03s.gif',
					'RainbowGif/frame_25_delay-0.04s.gif',
					'RainbowGif/frame_26_delay-0.03s.gif',
					'RainbowGif/frame_27_delay-0.03s.gif',
					'RainbowGif/frame_28_delay-0.04s.gif',
					'RainbowGif/frame_29_delay-0.03s.gif',
					'RainbowGif/frame_30_delay-0.03s.gif',
					'RainbowGif/frame_31_delay-0.04s.gif',
					'RainbowGif/frame_32_delay-0.03s.gif',
					'RainbowGif/frame_33_delay-0.03s.gif',
					'RainbowGif/frame_34_delay-0.04s.gif',
					'RainbowGif/frame_35_delay-0.03s.gif',
					'RainbowGif/frame_36_delay-0.03s.gif',
					'RainbowGif/frame_37_delay-0.04s.gif',
					'RainbowGif/frame_38_delay-0.03s.gif',
					'RainbowGif/frame_39_delay-0.03s.gif',
					'RainbowGif/frame_40_delay-0.04s.gif',
					'RainbowGif/frame_41_delay-0.03s.gif',
					'RainbowGif/frame_42_delay-0.03s.gif',
					'RainbowGif/frame_43_delay-0.04s.gif',
					'RainbowGif/frame_44_delay-0.03s.gif',
					'RainbowGif/frame_45_delay-0.03s.gif',
					'RainbowGif/frame_46_delay-0.04s.gif',
					'RainbowGif/frame_47_delay-0.03s.gif',
					'RainbowGif/frame_48_delay-0.03s.gif',
					'RainbowGif/frame_49_delay-0.04s.gif',
					'RainbowGif/frame_50_delay-0.03s.gif',
					'RainbowGif/frame_51_delay-0.03s.gif',
					'RainbowGif/frame_52_delay-0.04s.gif',
					'RainbowGif/frame_53_delay-0.03s.gif',
					'RainbowGif/frame_54_delay-0.03s.gif',
					'RainbowGif/frame_55_delay-0.04s.gif',
					'RainbowGif/frame_56_delay-0.03s.gif',
					'RainbowGif/frame_57_delay-0.03s.gif',
					'RainbowGif/frame_58_delay-0.04s.gif',
					'RainbowGif/frame_59_delay-0.04s.gif'
                ],
    image_counter = 0; // To keep track of the current image

setInterval(function() {

    if(document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
    if(document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();

    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
       
    if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 25);






function openNav() {
	document.getElementById("mySidebar").style.width = "250px";	
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
}





document.addEventListener('DOMContentLoaded', function() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      checkbox.parentElement.querySelector('.text').innerHTML = 
        checkbox.checked ? 'ON' : 'OFF';
      if (this.dataset.action === 'rainbow') {
        RainbowId.classList.toggle('Rainbow');
      } if (this.dataset.action === 'not a rainbow') {
			document.getElementById('openBtnId').innerHTML =
				checkbox.checked ? '<span style="font-size: 45.5px;">69</span>' : '⚙️';
		      document.getElementById('sixNine1').innerHTML = 
				checkbox.checked ? '69' : 'TAG';
			document.getElementById('sixNine2').innerHTML = 
				checkbox.checked ? '69' : 'DEFINITION';
			document.getElementById('sixNine3').innerHTML = 
				checkbox.checked ? '69' : 'EXAMPLE';
			document.getElementById('sixNine4').innerHTML =
				checkbox.checked ? '&lt;69&gt; &lt;/69&gt;' : '&lt;title&gt; &lt;/title&gt;';
			document.getElementById('sixNine5').innerHTML =
				checkbox.checked ? '69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69' : 'Defines the documents title that is shown in a browsers title bar or a pages tab.';
			document.getElementById('sixNine6').innerHTML =
				checkbox.checked ? '&lt;69&gt;69 69&lt;/69&gt;' : '&lt;title&gt;Asignment 3&lt;/title&gt;';
			document.getElementById('sixNine7').innerHTML =
				checkbox.checked ? '&lt;69&gt; &lt;/69&gt' : '&lt;style&gt; &lt;/style&gt';
			document.getElementById('sixNine8').innerHTML =
				checkbox.checked ? '69 69 69 69 69 69 69 69 69 69 69 69' : 'Rules that describe how a document will be presented in a browser.';
			document.getElementById('sixNine9').innerHTML =
				checkbox.checked ? '&lt;69&gt;69, 69, 69, 69 {69: 69px;69: 69px 69 69;}69 {69-69: 69;}&lt;/69&gt;' : '&lt;style&gt;table, tr, td, th {padding: 15px;border: 1px solid red;}table {border-collapse: collapse;}&lt;/style&gt;';
			document.getElementById('sixNine10').innerHTML =
				checkbox.checked ? '&lt;69-69&gt; &lt;/69-69&gt;' : '&lt;h1-h6&gt; &lt;/h1-h6&gt;';
			document.getElementById('sixNine11').innerHTML =
				checkbox.checked ? '&lt;69&gt; 69 69 69 69 69 69 &lt;69&gt; 69 69 69 69 69' : '&lt;h1&gt; defines the most important heading while &lt;h6&gt; defines the least important heading.';
			document.getElementById('sixNine12').innerHTML =
				checkbox.checked ? '<p><span style="font-size: 32px; font-weight: bolder;">&lt;69&gt;69&lt;/69&gt;</span> <span style="font-size: 10.72px; font-weight: bolder;">&lt;69&gt;69&lt;/69&gt;</span></p>' : '<p><span style="font-size: 32px; font-weight: bolder;">&lt;h1&gt;Hello&lt;/h1&gt;</span> <span style="font-size: 10.72px; font-weight: bolder;">&lt;h6&gt;WORLD&lt;/h6&gt;</span></p>';
			document.getElementById('sixNine13').innerHTML =
				checkbox.checked ? '&lt;69&gt; &lt;/69&gt;' : '&lt;p&gt; &lt;/p&gt;';
			document.getElementById('sixNine14').innerHTML =
				checkbox.checked ? '69 69 69 69 69 69 69' : 'The &lt;p&gt; HTML element represents a paragraph.';
			document.getElementById('sixNine15').innerHTML =
				checkbox.checked ? '<p>&lt;69&gt;69 69&lt;/69&gt;</p>' : '<p>&lt;p&gt;Hello WORLD&lt;/p&gt;</p>';
			document.getElementById('sixNine16').innerHTML =
				checkbox.checked ? '&lt;69&gt; &lt;/69&gt;' : '&lt;strong&gt; &lt;/strong&gt;';
			document.getElementById('sixNine17').innerHTML =
				checkbox.checked ? '69 "69" 69 69 69 69 69' : 'The "strong" tag makes the word bold';
			document.getElementById('sixNine18').innerHTML =
				checkbox.checked ? '<strong>69 69 69 69</strong>' : '<strong>This text is STRONG</strong>';
			document.getElementById('sixNine19').innerHTML =
				checkbox.checked ? '&lt;69&gt; &lt;/69&gt;' : '&lt;em&gt; &lt;/em&gt;';
			document.getElementById('sixNine20').innerHTML =
				checkbox.checked ? '69 69 "69" 69 69 69 69 (69 69)' : 'The tag "em" means it is emphasized (aka italics)';
			document.getElementById('sixNine21').innerHTML =
				checkbox.checked ? '69 69 69 69 <em>69.</em>' : 'This word has been <em>emphaSIZED.</em>';
			document.getElementById('sixNine22').innerHTML =
				checkbox.checked ? '&lt;6969&gt &lt;/6969&gt;' : '&lt;iframe&gt; &lt;/iframe&gt;';
			document.getElementById('sixNine23').innerHTML =
				checkbox.checked ? '69 69 69 69 69 69 69 69 69 69 69' : 'An HTML document embedded inside another HTML document on a website.';
			document.getElementById('sixNine25').innerHTML =
				checkbox.checked ? '&lt;69 69 69 69 69 69 69 69 69&gt; &lt;69&gt;' : '&lt;a href="link with https:// in the front of it&gt; &lt;/a &gt;';
			document.getElementById('sixNine26').innerHTML =
				checkbox.checked ? '69 69 69' : 'Creates a hyperlink.';
			document.getElementById('sixNine27').innerHTML =
				checkbox.checked ? '&lt;69&gt;<a>69 69</a>&gt;' : '&lt;<a href="mrkam.ca">Click Here</a>&gt;';
			document.getElementById('sixNine28').innerHTML =
				checkbox.checked ? '&lt;69&gt;' : '&lt;hr&gt;';
			document.getElementById('sixNine29').innerHTML =
				checkbox.checked ? '69 69 69 69' : 'Creates a solid line.';
			document.getElementById('sixNine30').innerHTML =
				checkbox.checked ? '69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69' : '&lt;hr&gt;';
			document.getElementById('sixNine31').innerHTML =
				checkbox.checked ? '&lt;69&gt; &lt;69&gt;&lt;/69&gt; &lt;/69&gt;' : '&lt;ul&gt; &lt;li&gt;&lt;/li&gt; &lt;/ul&gt;';
			document.getElementById('sixNine32').innerHTML =
				checkbox.checked ? '69 69 69 69 69 69 69' : 'Creates a list with bullet points.';
			document.getElementById('sixNine33').innerHTML =
				checkbox.checked ? '<ul><li>69</li><li>69</li></ul>' : '<ul><li>Ocean</li><li>Kam</li></ul>';
			document.getElementById('sixNine34').innerHTML =
				checkbox.checked ? '&lt;69&gt; &lt;69&gt;&lt;/69&gt; &lt;/69&gt;' : '&lt;ol&gt; &lt;li&gt;&lt;/li&gt; &lt;/ol&gt;';
			document.getElementById('sixNine35').innerHTML =
				checkbox.checked ? '69 69 69 69 69 69' : 'Creates a list with numbered points.';
			document.getElementById('sixNine36').innerHTML =
				checkbox.checked ? '<ol><li>69</li><li>69</li></ol>' : '<ol><li>Ocean</li><li>Kam</li></ol>';
			document.getElementById('sixNine37').innerHTML =
				checkbox.checked ? '&lt;69&gt;' : '&lt;img&gt;';
			document.getElementById('sixNine38').innerHTML =
				checkbox.checked ? '69 69 69 69 69 69 69 69 69' : 'You can link and img and itll show up.';
		}
		if (this.dataset.action === 'not not a rainbow') {
			window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=3s', '_self');
		}
		if (this.dataset.action === 'not not not a rainbow'){
			onbeforeunload = function(){localStorage.x=1};
			if(confirm("DON'T CLICK CONFIRM")){
				setTimeout(function(){
				while(1)location.reload(1)
				}, 1000)
		}
		else {
			
		}
			
		}
      
    });
  });
});