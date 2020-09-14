"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var alertActions_1 = require("../store/actions/alertActions");
var weatherActions_1 = require("../store/actions/weatherActions");
var Search = function (_a) {
    var title = _a.title;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_1.useState(''), city = _b[0], setCity = _b[1];
    var LOCAL_STORAGE_KEY = 'cooking';
    react_1.useEffect(function () {
        var getCities = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (getCities != null)
            setCity(JSON.parse(getCities));
    }, []);
    react_1.useEffect(function () {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(city));
    }, [city]);
    var changeHandler = function (e) {
        setCity(e.currentTarget.value);
    };
    var submitHandler = function (e) {
        e.preventDefault();
        if (city.trim() === '') {
            return dispatch(alertActions_1.setAlert('City is required!'));
        }
        dispatch(weatherActions_1.setLoading());
        dispatch(weatherActions_1.getWeather(city));
        setCity('');
    };
    return (react_1["default"].createElement("div", { className: "hero is-light has-text-centered" },
        react_1["default"].createElement("div", { className: "hero-body" },
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("h1", { className: "title" }, title),
                react_1["default"].createElement("form", { className: "py-5", onSubmit: submitHandler },
                    react_1["default"].createElement("input", { type: "text", className: "input has-text-centered mb-2", placeholder: "Enter city name", style: { maxWidth: 300 }, value: city, onChange: changeHandler }),
                    react_1["default"].createElement("button", { className: "button is-primary is-fullwidth", style: { maxWidth: 300, margin: '0 auto' } }, "Search"))))));
};
exports["default"] = Search;
