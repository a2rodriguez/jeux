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
function Doodle() {
	this.x = 195;
	this.y = 500;
	this.width = 60;
	this.height = 80;
	this.speed = 0;
	this.print = function() {
		canvas.drawImage(DOODLE_IMG, this.x, this.y);
	}
	this.move = function(nx, ny) {
		this.x = nx;
		this.y = ny;
	};
	this.jump = function(initSpeed) {
		this.speed = initSpeed;
	};
	this.go = function() {
		if(Mouse.x >= 370)
			Mouse.x = 370;
		else if(Mouse.x <= 30) {
			Mouse.x = 30;
		}
		this.move(Mouse.x - (this.width/2), this.y - this.speed);
		// Gestion des colisions
		colisionManage(this);
		/*if(this.y >= 520) {
			this.jump(30);
		}*/
		this.speed -= APESANTEUR;
		this.print();
	};
}