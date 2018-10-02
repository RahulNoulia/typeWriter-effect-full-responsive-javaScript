


class TypeWriter
{
    constructor(element,words,wait)
    {
        this.element=element;
        this.words = words;
        this.txt  = '';
        this.wordIndex = 0;
        this.wait=parseInt(wait , 10);
        this.type();
        this.deleting = false;
    }
    type()
    {
         // current index 
    const i = this.wordIndex % this.words.length;
   
    const wholetxt = this.words[i];
    
    // if this true than start deleting character one by one
    if(this.deleting)
    {
        this.txt = wholetxt.substring(0, this.txt.length - 1);
    }
    else
    {
        this.txt = wholetxt.substring(0, this.txt.length + 1);
    }

    let speed = 300;
    if(this.deleting)
    {
        speed /=2;
    }
    if(!this.deleting && this.txt==wholetxt)
    {
        speed = this.wait;
        this.deleting=true;
    }
    else if(this.deleting && this.txt == '')
    {
        this.deleting=false;
        
        // goto next index means next word
        
        this.wordIndex++;
       
        speed = 500;
    }
    this.element.innerHTML  = `<span class="txt">${this.txt}</span>`;
    setTimeout(()=>this.type(),speed);
    }
}

document.addEventListener('DOMContentLoaded',init);


function  init()
{
    const element  = document.querySelector('.type');
    const words = JSON.parse(element.getAttribute('data-words'));
    const wait = element.getAttribute('data-wait');

    //  initilize TypeWriter 

    new TypeWriter(element, words, wait);
}

