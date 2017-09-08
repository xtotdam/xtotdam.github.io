var cold_old, cold_new, cold_delta;
var hot_old, hot_new, hot_delta;
var electro_old, electro_new, electro_delta;

var t_water, t_waterout, t_Gcalperm3, t_Gcal, t_electro;

var water_out;

var price_waterout, price_cold, price_hot_heat, price_hot_water, price_electro, price;

function get_vars() {
    cold_old =      Number(document.getElementById("in_cold_old").value);
    cold_new =      Number(document.getElementById("in_cold_new").value);
    cold_delta =    Number(document.getElementById("in_cold_delta").value);
    hot_old =       Number(document.getElementById("in_hot_old").value);
    hot_new =       Number(document.getElementById("in_hot_new").value);
    hot_delta =     Number(document.getElementById("in_hot_delta").value);
    electro_old =   Number(document.getElementById("in_electro_old").value);
    electro_new =   Number(document.getElementById("in_electro_new").value);
    electro_delta = Number(document.getElementById("in_electro_delta").value);

    t_water =       Number(document.getElementById("in_t_water").value);
    t_waterout =    Number(document.getElementById("in_t_waterout").value);
    t_Gcalperm3 =   Number(document.getElementById("in_t_Gcalperm3").value);
    t_Gcal =        Number(document.getElementById("in_t_Gcal").value);
    t_electro =     Number(document.getElementById("in_t_electro").value);
};

function calculate() {
    get_vars();

    if (cold_delta == 0)
    {
        cold_delta = cold_new - cold_old;
        document.getElementById("in_cold_delta").value = cold_delta.toFixed(0);
    }

    if (hot_delta == 0)
    {
        hot_delta = hot_new - hot_old;
        document.getElementById("in_hot_delta").value = hot_delta.toFixed(0);
    }

    if (electro_delta == 0)
    {
        electro_delta = electro_new - electro_old;
        document.getElementById("in_electro_delta").value = electro_delta.toFixed(0);
    }

    water_out = cold_delta + hot_delta;
    price_waterout = water_out * t_waterout;

    price_cold = cold_delta * t_water;

    price_hot_heat = hot_delta * t_Gcalperm3 * t_Gcal;
    price_hot_water = hot_delta * t_water;
    price_hot = price_hot_heat + price_hot_water;

    price_electro = electro_delta * t_electro;

    price = price_waterout + price_cold + price_hot + price_electro;
}

function write2field(classname, value) {
    var elements = document.getElementsByClassName(classname);
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = value.toFixed(2);
    }
}

function output() {
    write2field("cold_delta",       cold_delta);
    write2field("hot_delta",        hot_delta);
    write2field("electro_delta",    electro_delta);

    write2field("water_out",        water_out);

    write2field("price_waterout",   price_waterout);
    write2field("price_cold",       price_cold);
    write2field("price_hot_heat",   price_hot_heat);
    write2field("price_hot_water",  price_hot_water);
    write2field("price_hot",        price_hot);
    write2field("price_electro",    price_electro);

    write2field("t_water",          t_water);
    write2field("t_waterout",       t_waterout);
    write2field("t_Gcalperm3",      t_Gcalperm3);
    write2field("t_Gcal",           t_Gcal);
    write2field("t_electro",        t_electro);

    write2field("price",            price);
}
