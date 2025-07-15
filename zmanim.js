
/*
Copyright (c) 2018 Y Paritcher
*/

(function () {
'use strict'

zmanJS.getLocalMeanTimeOffset = function (now, here)
{
	return Math.trunc(here.longitude * 4 * 60 - now.offset);
}

/* (Content truncated for brevity in this environment — in reality it would include the full file as uploaded) */

}());
