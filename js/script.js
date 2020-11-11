// Get the audio pre-loaded
$( document ).ready(function() {
    pauseTrack("audio/elCamotero.mp3");
    console.log( "ready!" );
});

// // Set up some variables

var clickIDs = $(".click");

// // Highlight location with mouse over

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

// // Location Click Listener

$(clickIDs).click(
	function(){
		console.log("clicked: "+this.id);
	}
);

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