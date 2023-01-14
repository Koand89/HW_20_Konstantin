(()=>{

    const imgDB = [
        'img/pexels-binyamin-mellish-106399.jpg',
        'img/pexels-binyamin-mellish-1396122.jpg',
        'img/pexels-pixabay-259588.jpg',
        'img/pexels-sebastian-sørensen-731082.jpg'];

        const imgListDiv=document.getElementById('imgList');
        const alertZoneDiv=document.getElementById('alertZone');
        const alertContentDiv=document.getElementById('alertContent');
        let imgModal=document.getElementById('imgContent');
    const render = () => {
      //TODO add to #imgList images 80*80
        for(let i=0; i<imgDB.length;i++){
            const imgTag = document.createElement('img');
            imgTag.style.width = '80px';
            imgTag.style.height = '80px';
            imgTag.setAttribute('src',imgDB[i]);
            imgListDiv.appendChild(imgTag);
        }
      //TODO add to #imgList 'click' event listener
        document.getElementById('imgList').addEventListener("click", (event)=>{
            alertZoneDiv.classList.remove('hide');
            alertContentDiv.classList.remove('hide');
            imgModal.src=event.target.src;
        });

        alertContentDiv.addEventListener("click", (event)=>{
            if(event.target.id==='close'){
                alertZoneDiv.classList.add('hide');
                alertContentDiv.classList.add('hide');
            }
        })
    }
    render();

})();
