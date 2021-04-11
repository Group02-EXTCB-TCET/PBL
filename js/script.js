
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "_______ Impulse Response is a filter in which output is computed using present input and past output",
					answer: "Infinite",
					position: 0,
					orientation: "across",
					startx: 1,
					starty: 2
				},
				{
					clue: "What is the region after the stop band frequency in the magnitude frequency response of a low pass filter?",
					answer: "Stop",
					position: 1,
					orientation: "down",
					startx: 7,
					starty: 1
				},
				{
					clue: "In which type of filter poles always leads zero in pole zero plot.",
					answer: "low",
					position: 2,
					orientation: "across",
					startx: 6,
					starty: 3
				},
				{
					clue: "The Elliptic filters have ____  stop band and pass band",
					answer: "equiripple",
					position: 3,
					orientation: "across",
					startx: 2,
					starty: 6
				},
				{
					clue: "The transfer function of a sytem is given by H(z) = 6+z^(-1)-z^(-2). It is a _____ phased system?",
					answer: "minimum",
					position: 4,
					orientation: "down",
					startx: 4,
					starty: 1
				},
				{
					clue: "A Digital LPF is to be designed for following specification:-Passband ripple (Ap) ≤ 1dB,Stopband ripple(AS) ≥ 40dB,Passband edge (FP) = 4KHz,Stopband edge (FS) = 6KHz,Sampling rate (Fsamp) = 24KHz.Find the order of Butterworth",
					answer: "ten",
					position: 5,
					orientation: "down",
					startx: 2,
					starty: 5
				},
				{
					clue: "A Digital LPF is to be designed for following specification:-Passband ripple (Ap) ≤ 1dB,Stopband ripple(AS) ≥ 40dB,Passband edge (FP) = 4KHz,Stopband edge (FS) = 6KHz,Sampling rate (Fsamp) = 24KHz.Find the order of Chebyshev Filter ",
					answer: "six",
					position: 6,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: "The non-linear relation between the analog and digital frequencies is called as:",
					answer: "warping",
					position: 7,
					orientation: "down",
					startx: 8,
					starty: 3
				},
				{
					clue: "The poles of Butterworth filter lies on ",
					answer: "circle",
					position: 8,
					orientation: "down",
					startx: 10,
					starty: 2
				},
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
