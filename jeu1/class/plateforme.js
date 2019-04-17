/*
* Copyright (c) 1998, Regents of the University of California
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the University of California, Berkeley nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function Plateforme(x, y) {
	this.x = x;
	this.y = y;
	this.width = 100;
	this.height = 15;
	this.print = function() {
		canvas.drawImage(PLATEFORME_IMG, this.x, this.y);
	}
}

function printPlateformes(pf) {
	for(var i = 0, to = pf.length; i < to; i++) {
		pf[i].print();
	}
}

function colisionManage(doodle) {
	var pf = plateformes;
	for(var i = 0, to = pf.length; i < to; i++) {
		var info = '';
		
		if((doodle.x >= pf[i].x && doodle.x <= (pf[i].x + pf[i].width)) || ((doodle.x + doodle.width) >= pf[i].x && (doodle.x + doodle.width) <= (pf[i].x + pf[i].width))) {
			if(((doodle.y + doodle.height) >= pf[i].y && (doodle.y + doodle.height) <= (pf[i].y + pf[i].height))) {
				if(doodle.speed < 0) {
					doodle.jump(30);
				}
			}
		}
	}
}

function upPlateformes(up) {
	var pf = plateformes;
	var continuer = true;
	for(var i = 0, to = pf.length; i < to; i++) {
		pf[i].y += up;
	}
	while(continuer == true) {
		if(pf[0].y >= 600) {
			pf.shift();
		} else {
			continuer = false;
		}
		
	}
}

function createPlateformes(begin, end) {
	var continuer = true;
	if(yMax <= 2500) {
		if(begin == 0) {
			plateformes.push(new Plateforme(150, 585));
		}
		while(continuer == true) {
			var y = rand(yMax+50, yMax+100);
			var x = rand(0, 350);
			yMax = y;
			y = 600-y;
			//alert('Nouvelle plateforme à ('+x+';'+y+')');
			plateformes.push(new Plateforme(x, y));
			if(yMax >= end) {
				continuer = false;
			}
		}
	} else {
		while(continuer == true) {
			var y = rand(yMax+100, yMax+160);
			var x = rand(0, 350);
			yMax = y;
			y = 600-y;
			plateformes.push(new Plateforme(x, y));
			if(yMax <= end) {
				continuer = false;
			}
		}
	}
}