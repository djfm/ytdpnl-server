"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ParticipantsC = void 0;
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var FileUpload_1 = __importDefault(require("@mui/icons-material/FileUpload"));
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var react_router_dom_1 = require("react-router-dom");
var DownloadLinkC_1 = __importDefault(require("./shared/DownloadLinkC"));
var NotificationsC_1 = __importDefault(require("./shared/NotificationsC"));
var TableC_1 = __importDefault(require("./shared/TableC"));
var adminApiProvider_1 = require("../adminApiProvider");
// @ts-expect-error this is a text file, not a module
var participants_sample_csv_1 = __importDefault(require("../../../public/participants.sample.csv"));
var tableDescriptor = {
    headers: [
        {
            key: 'email',
            element: 'Email'
        },
        {
            key: 'code',
            element: 'Participant Code'
        },
        {
            key: 'experiment-arm',
            element: 'Experiment arm'
        },
    ],
    rows: function (p) { return ({
        key: p.email,
        elements: [
            // eslint-disable-next-line react/jsx-key
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/participants/".concat(p.email) }, p.email),
            p.code,
            p.arm,
        ]
    }); }
};
var TableC = (0, TableC_1["default"])(tableDescriptor);
var UploadFormC = function () {
    var exampleString = participants_sample_csv_1["default"];
    var _a = __read((0, react_1.useState)(), 2), message = _a[0], setMessage = _a[1];
    var form = (0, react_1.useRef)(null);
    var api = (0, adminApiProvider_1.useAdminApi)();
    var onFileChange = function (e) {
        var _a, _b;
        var file = (_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
        if (!file) {
            return;
        }
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setMessage({
                            text: 'Uploading participants file...'
                        });
                        return [4 /*yield*/, api.uploadParticipants(file)];
                    case 1:
                        res = _a.sent();
                        if (res.kind === 'Success') {
                            setMessage({
                                text: res.value,
                                severity: 'success'
                            });
                        }
                        else {
                            setMessage({
                                text: res.message,
                                severity: 'error'
                            });
                        }
                        if (form.current) {
                            form.current.reset();
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    var example = (react_1["default"].createElement(material_1.Box, { sx: { mb: 4 } },
        react_1["default"].createElement(material_1.Typography, null,
            react_1["default"].createElement("strong", null, "Example file:"),
            "\u00A0",
            react_1["default"].createElement(DownloadLinkC_1["default"], { href: '/participants.sample.csv' }, "(download)")),
        react_1["default"].createElement("pre", { style: { marginTop: 0, maxWidth: '100%', overflow: 'auto' } }, exampleString)));
    var ui = (react_1["default"].createElement(material_1.Box, { component: 'section', sx: { mb: 4 } },
        react_1["default"].createElement(material_1.Typography, { variant: 'h2', sx: { mb: 2 } }, "Add Participants"),
        react_1["default"].createElement(material_1.Typography, { variant: 'body1', component: 'div', sx: { mb: 2 } },
            "You can add participants to the experiment by uploading a CSV file, it should have at least the following 3 columns:",
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null, "email"),
                react_1["default"].createElement("li", null, "code"),
                react_1["default"].createElement("li", null, "arm")),
            "where \"arm\" is either \"control\" or \"treatment\".",
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("strong", null, "Note:"),
                " The \"code\" column should contain large random values so that participant codes cannot be guessed.")),
        example,
        react_1["default"].createElement("form", { ref: form },
            react_1["default"].createElement(material_1.FormControl, { sx: { mb: 2 } },
                react_1["default"].createElement(material_1.Button, { component: 'label', variant: 'outlined', htmlFor: 'list', endIcon: react_1["default"].createElement(FileUpload_1["default"], null) },
                    "Upload CSV",
                    react_1["default"].createElement("input", { hidden: true, type: 'file', id: 'list', name: 'list', accept: '.csv', onChange: onFileChange })),
                react_1["default"].createElement(material_1.FormHelperText, null, "The separator must be a comma.")),
            react_1["default"].createElement(NotificationsC_1["default"], { message: message }))));
    return ui;
};
var ListC = function () {
    var _a;
    var _b = __read((0, react_1.useState)(), 2), participants = _b[0], setParticipants = _b[1];
    var _c = __read((0, react_1.useState)('1'), 2), pageInput = _c[0], setPageInput = _c[1];
    var pTmp = Math.min(Math.max(parseInt(pageInput, 10), 0), (_a = participants === null || participants === void 0 ? void 0 : participants.pageCount) !== null && _a !== void 0 ? _a : 1);
    var pageInputOk = Number.isInteger(pTmp);
    var page = pageInputOk ? pTmp : 1;
    var _d = __read((0, react_1.useState)(), 2), message = _d[0], setMessage = _d[1];
    var _e = __read((0, react_1.useState)(''), 2), emailLike = _e[0], setEmailLike = _e[1];
    var api = (0, adminApiProvider_1.useAdminApi)();
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api.getParticipants(page - 1, emailLike)];
                    case 1:
                        res = _a.sent();
                        if (res.kind === 'Success') {
                            setParticipants(res.value);
                        }
                        else {
                            setMessage({
                                text: res.message,
                                severity: 'error'
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [page, emailLike]);
    var handlePageChange = function (e) {
        setPageInput(e.target.value);
    };
    if (participants === undefined) {
        return react_1["default"].createElement(material_1.Typography, null, "Loading...");
    }
    if (emailLike === '' && participants.results.length === 0) {
        return react_1["default"].createElement(material_1.Typography, null, "No participants yet.");
    }
    var list = (react_1["default"].createElement(material_1.Box, null,
        react_1["default"].createElement(material_1.Box, { sx: { mb: 1 } },
            react_1["default"].createElement(material_1.TextField, { value: emailLike, onChange: function (e) {
                    setEmailLike(e.target.value);
                }, sx: { display: 'block' }, label: 'Search participant by email', InputProps: {
                    endAdornment: (react_1["default"].createElement(material_1.InputAdornment, { position: 'end' },
                        react_1["default"].createElement(Search_1["default"], null)))
                } })),
        react_1["default"].createElement(material_1.Box, { sx: { my: 2 } },
            react_1["default"].createElement(material_1.Typography, { sx: { display: 'flex', alignItems: 'center' } },
                react_1["default"].createElement(material_1.Typography, { variant: 'body2' }, "Page\u00A0"),
                react_1["default"].createElement("input", { type: 'number', value: pageInputOk ? page : pageInput, min: 1, max: participants.pageCount, step: 1, onChange: handlePageChange }),
                react_1["default"].createElement(material_1.Typography, { variant: 'body2' }, "\u00A0/\u00A0"),
                react_1["default"].createElement(material_1.Typography, { variant: 'body2' }, participants.pageCount))),
        react_1["default"].createElement(TableC, { items: participants.results })));
    return (react_1["default"].createElement(material_1.Box, { component: 'section', sx: { mb: 4 } },
        react_1["default"].createElement(material_1.Typography, { variant: 'h2', sx: { mb: 2 } }, "Participants list"),
        react_1["default"].createElement(NotificationsC_1["default"], { message: message }),
        list));
};
var ParticipantsC = function () { return (react_1["default"].createElement("div", null,
    react_1["default"].createElement(material_1.Typography, { variant: 'h1', sx: { mb: 4 } }, "Participants"),
    react_1["default"].createElement(ListC, null),
    react_1["default"].createElement(UploadFormC, null))); };
exports.ParticipantsC = ParticipantsC;
exports["default"] = exports.ParticipantsC;
