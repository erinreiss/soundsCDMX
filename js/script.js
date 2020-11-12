// Get the audio pre-loaded
$( document ).ready(function() {
    pauseTrack();
    console.log( "ready!" );
});

// Set up some variables

var clickIDs = $(".click");

//Hover and Click Listeners for Landing Page

$('#englishButton').mouseenter(
	function(){
		$(this).css('cursor', 'pointer');
		$(this).css('color', 'rgb(253, 183, 26)');
		$("#welcome").attr("src","images/welcomeEN.png");
	}
)
.mouseleave(
	function(){
		$(this).css('cursor', 'default');
		$(this).css('color', 'rgb(229, 227, 228)');
	}
)
.click(
	function(){
		// $("#baseImage").attr('xlink:href',"images/baseImageEN.png");
		$('.landing').css('display','none')
		$('.site').css('display','block')
	}
);

$('#spanishButton').hover(
	function(){
		$(this).css('cursor', 'pointer');
		$(this).css('color', 'rgb(253, 183, 26)');
		$("#welcome").attr("src","images/welcomeES.png");
	}
)
.mouseleave(
	function(){
		$(this).css('cursor', 'default');
		$(this).css('color', 'rgb(229, 227, 228)');
	}
)
.click(
	function(){
		// $("#baseImage").attr("xlink:href","images/baseImageES.png");
		$('.landing').css('display','none')
		$('.site').css('display','block')
	}
);

// Highlight location with mouse over

$(clickIDs).mouseenter(
	function(){
		$(this).css('cursor', 'pointer');
		var thisHighlight = (this.id+"H");
		$("#"+thisHighlight).fadeTo("opacity", "1");
		var thisAudio = ("audio/"+this.id+".mp3");
		console.log(thisAudio);
		changeTrack(thisAudio);
	}
);

$(clickIDs).mouseleave(
	function(){
		var thisHighlight = (this.id+"H");
		console.log("exit: "+this.id);
		// pauseTrack()
		$(this).css('cursor', 'default');
		$("#"+thisHighlight).fadeTo("opacity", "0");
	}
);

// Pause button hover

$("#pauseWrapper").mouseenter(
	function(){
		$(this).css('cursor', 'pointer');
		$("#pause").attr("src","images/pauseHov.png");
		pauseTrack();
	}
);

$("#pauseWrapper").mouseleave(
	function(){
		console.log("pause out");
		$(this).css('cursor', 'default');
		$("#pause").attr("src","images/pauseUn.png");
	}
);

// // Location Click Listener

// $("#pauseWrapper").click(
// 	function(){
// 		console.log("pause clicked");
// 		pauseTrack();
// 	}
// );

// function to reload and play audio player

function changeTrack(sourceUrl) {
    var audioDues = $("#player");      
    $("#lAudio").attr("src", sourceUrl);
    audioDues[0].pause();
    audioDues[0].load();//suspends and restores all audio element
    audioDues[0].play();
}

// fuction to pause the audio player

function pauseTrack(sourceUrl) {
    var audioDues = $("#player");      
    audioDues[0].pause();
    audioDues[0].load();//suspends and restores all audio element
}