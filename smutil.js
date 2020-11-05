(function(){
    setInterval(function(){
        modeText = ["stable", "rise", "fall", "f.rise", "f.fall", "chaos"];
        M = Game.Objects["Bank"].minigame;
        for (var i = 0; i < M.goodsById.length; i++) {
            var me = M.goodsById[i];
            valDiv = document.getElementById('bankGood-' + i).firstElementChild.children[3].firstChild;
            stoDiv = document.getElementById('bankGood-' + i).firstElementChild.children[4].firstChild;
            valDiv.textContent = "mode: " + modeText[me.mode] + ", value: ";
            stoDiv.textContent = "tick: " + me.dur + ", stock: ";
        }
    }, 2000);
})()
