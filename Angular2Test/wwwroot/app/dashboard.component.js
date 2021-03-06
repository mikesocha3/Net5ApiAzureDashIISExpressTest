var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var DashboardComponent = (function () {
    function DashboardComponent(_heroService, _router) {
        this._heroService = _heroService;
        this._router = _router;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        this._router.navigate(['HeroDetail', { id: hero.id }]);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
