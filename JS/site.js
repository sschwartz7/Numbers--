//get numbers from input
//entry point
//controller
function getValues() {

    let start = document.getElementById('startValue').value;
    let end = document.getElementById('endValue').value;
    start = Number(start);
    end = Number(end);
    let range = generateNumbers(start, end);
    displayNumbers(range);
}
//runs logic
function generateNumbers(start, end) {
    let range = [];
    if (isNaN(start) == true || isNaN(end) == true) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: "Both values must be numbers"
            }
        );
    } else if (start = end) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: "The 'Start Value' and 'End Value' cannot be the same number"
            }
        );
    } else if (start > end) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: "The number in the 'Start Value' box needs to be lower than the 'End Value' number"
            }
        );
    } else if (end - start >= 100) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: 'The number range is too long'
            }
        );
    } else {
        for (let num = start; num <= end; num++) {
            range.push(num);
        }
        return range;
    }

}

//displays onto page
//view function
function displayNumbers(range) {
    let tableHTML;
    for (let index = 0; index < range.length; index++) {
        let className;
        if (range[index] % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }
        let tableRowHTML = `<tr><td class="${className}">${range[index]}</tr></td>`;
        tableHTML = tableHTML + tableRowHTML;
    }
    document.getElementById('results').innerHTML = tableHTML;
}
