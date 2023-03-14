function generatePrimes(quota) {
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }
    const primes = [];
    const maximum = 1000000;
    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}
document.querySelector('#generate').addEventListener('click', () => {
    const quota = document.querySelector('#quota').value;
    const primes = generatePrimes(quota);
    document.querySelector('#output').textContent = `完成！已生成素数${quota}个。`;
});
document.querySelector('#reload').addEventListener('click', () => {
    document.location.reload()
});

// callback hell
function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
}
function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
}
function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
}
function doOperation() {
    doStep1(0, result1 => {
        doStep2(result1, result2 => {
            doStep3(result2, result3 => {
                console.log(`result: ${result3}`);
            });
        });
    });
}
doOperation();



const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log(json[0].name);
    });


// const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP 请求错误：${response.status}`);
//         }
//         return response.json();
//     })
//     .then(json => {
//         console.log(json[0].name);
//     })
//     .catch(error => {
//         console.error(`无法获取产品列表：${error}`);
//     });

async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP request error: ${response.status}`);
        }

        const json = await response.json();
        console.log(json[0].name);
    }
    catch (error) {
        console.error(`无法获取产品列表:${error}`);
    }
}

fetchProducts();