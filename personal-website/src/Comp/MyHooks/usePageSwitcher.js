import '../Comp-css/ExperienceEntry.css';

function usePageSwitcher(value) {
    var display = {
        first: 'empDesc',
        second: 'empInfo',
        third: 'empDandA',
    };

    var button = {
        btnOne: 'btO',
        btnTwo: 'btT',
        btnThree: 'btTh'
    }

    const on = {
        inline: 'inline',
        flex: 'flex',
    };

    const off = 'none';
    const active = 'current';
    const inactive = 'exp-buttons'; 
    
    var displayOne = document.getElementsByClassName(display.first);
    var displayTwo = document.getElementsByClassName(display.second);
    var displayThree = document.getElementsByClassName(display.third);

    var buttonOne = document.getElementsByClassName(button.btnOne)[0];
    var buttonTwo = document.getElementsByClassName(button.btnTwo)[0];
    var buttonThree = document.getElementsByClassName(button.btnThree)[0];

for (var i = 0; i < displayOne.length; i++) {
    if (value === 1) {
        displayOne[i].style.display = on.flex;
        displayTwo[i].style.display = off;
        displayThree[i].style.display = off;

        buttonOne.classList.add(active);
        buttonTwo.classList.remove(active);
        buttonThree.classList.remove(active);
    } else if (value === 2) {
        displayOne[i].style.display = off;
        displayTwo[i].style.display = on.flex;
        displayThree[i].style.display = off;

        buttonOne.classList.remove(active);
        buttonTwo.classList.add(active);
        buttonThree.classList.remove(active);
    } else if (value === 3) {
        displayOne[i].style.display = off;
        displayTwo[i].style.display = off;
        displayThree[i].style.display = on.flex;

        buttonOne.classList.remove(active);
        buttonTwo.classList.remove(active);
        buttonThree.classList.add(active);
    }
}
}

export default usePageSwitcher;