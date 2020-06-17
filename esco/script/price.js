function products(set) {

    /*  prices  */

    var frontSide = 2590,
        rearSide = 2590,
        rearHemisphere = 4190,
        completeSet = 5690;

    var opacityPrice = {
        op10: 0,
        op5: 100,
        op0: 200
    };

    var bracingPrice = {
        clips: 0,
        magnets: 200
    };

    var additionalPrice = {
        std: 0,
        smoke: 0,
        short: 0
    };


    /*  count price  */
    var opVal = $("input[name = 'opacity']:checked").val(),
        opPrice = opacityPrice[opVal];


    var brVal = $("input[name = 'bracing']:checked").val(),
        brPrice = bracingPrice[brVal];

    var adVal = $("input[name = 'additional']:checked").val(),
        adPrice = additionalPrice[adVal];

    frontSide = String(frontSide + opPrice + brPrice + adPrice);
    frontSide = frontSide[0] + ' ' + frontSide.slice(1);

    rearSide = String(rearSide + opPrice + brPrice + adPrice);
    rearSide = rearSide[0] + ' ' + rearSide.slice(1);

    rearHemisphere = String(rearHemisphere + opPrice + brPrice + adPrice);
    rearHemisphere = rearHemisphere[0] + ' ' + rearHemisphere.slice(1);

    completeSet = String(completeSet + opPrice + brPrice + adPrice);
    completeSet = completeSet[0] + ' ' + completeSet.slice(1);


    /*  write prices  */
    $('.frontSide').text(frontSide);
    $('.rearSide').text(rearSide);
    $('.rearHemisphere').text(rearHemisphere);
    $('.completeSet').text(completeSet);


    /*  select product  */
    var opacityText = {
        op10: '10',
        op5: '5',
        op0: '0'
    };

    var bracingText = {
        clips: 'Клипсы',
        magnets: 'Магниты'
    };

    var additionalText = {
        std: 'Стандартные',
        smoke: 'Для курения',
        short: 'Укороченные'
    };


    /*  count product  */
    var opText = opacityText[opVal],
        brText = bracingText[brVal],
        adText = additionalText[adVal];


    /*  write product  */
    $('.opText').text(opText);
    $('.brText').text(brText);
    $('.adText').text(adText);


    /*  set in modal  */
    var setText = {
        frontSide: 'Передний комплект',
        rearSide: 'Задний комплект',
        rearHemisphere: 'Задняя полусфера',
        completeSet: 'Полный комплект'
    }
    $('.setText').text(setText[set]);

    /*  price in modal  */
    switch (set) {
        case 'frontSide': {
            $('.priceText').text(frontSide);
            break;
        }
        case 'rearSide': {
            $('.priceText').text(rearSide);
            break;
        }
        case 'rearHemisphere': {
            $('.priceText').text(rearHemisphere);
            break;
        }
        case 'completeSet': {
            $('.priceText').text(completeSet);
            break;
        }
    }
}

$('input[name = "opacity"]').click(products);
$('input[name = "bracing"]').click(products);
$('input[name = "additional"]').click(products);

$('.btnFrontSide').click(() => products('frontSide'));
$('.btnRearSide').click(() => products('rearSide'));
$('.btnRearHemisphere').click(() => products('rearHemisphere'));
$('.btnCompleteSet').click(() => products('completeSet'));