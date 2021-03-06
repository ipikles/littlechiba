function Card(args) {
	this.agendaPoints = args.agendaPoints || 0;
	this.att = args.attributes || "";
	this.customInfluenceCalculation = args.customInfluenceCalculation;
	this.faction = args.faction;
	this.img = args.img;
	this.influence = args.influence || null;
	this.key = args.key || args.name.replace(/[\s.]/g, ""); // Just for backwards compatibility; old version was intended to be localized, but never was; stuff was saved with "keys" instead of the actual names.
	this.name = args.name;
	this.nriKey = args.nriKey;
	this.qty = args.qty || 3;
	this.set = args.set;
	this.type = args.type;
	this.validate = args.validate || function () { return true; };

	if (this.type === identity) {
		this.side = (this.faction.match(/Anarchs|Criminal|Shapers/)) ? runner : corp;
		this.minCards = args.minCards || 45;
		this.influenceAvailable = args.influenceAvailable || 15;
	} else {
		this.side = (this.type.match(/Event|Hardware|Program|Resource/)) ? runner : corp;
	}

	this.toString = function () {
		return this.name;
	};
	this.getInfluenceString = function (pad, qty) {
		var infString = "",	i;
		qty = qty || 1;
		if (this.influence !== null) {
			for (i = 0; i < this.influence * qty; i++) {
				infString += "\u25cf";
			}
			while (pad && (i < 5)) {
				infString += "\u25cb";
				i++;
			}
		}
		return infString;
	};
	this.getData = function () {
		if (foreignCardData[this.nriKey]) {
			return foreignCardData[this.nriKey];
		}

		foreignCardData[this.nriKey] = "Requesting data...";

		Ajax.getCardData(this.nriKey);
		return foreignCardData[this.nriKey];
	};
}
var cards = [];
var foreignCardData = {};

cards.push(new Card({
	name: "Engineering the Future",
	type: identity,
	faction: hb,
	influence: null,
	set: setNames.anr,
	qty: 1,
	attributes: "Megacorp credits",
	nriKey: "01054"
}));
cards.push(new Card({
	name: "Personal Evolution",
	type: identity,
	faction: jin,
	influence: null,
	set: setNames.anr,
	qty: 1,
	attributes: "Megacorp netDamage",
	nriKey: "01067"
}));
cards.push(new Card({
	name: "Making News",
	type: identity,
	faction: nbn,
	influence: null,
	set: setNames.anr,
	qty: 1,
	attributes: "Megacorp trace recurringCredits",
	nriKey: "01080"
}));
cards.push(new Card({
	name: "Building a Better World",
	type: identity,
	faction: wey,
	influence: null,
	set: setNames.anr,
	qty: 1,
	attributes: "Megacorp credits",
	nriKey: "01093"
}));
		
cards.push(new Card({
	name: "Accelerated Beta Test",
	type: agenda,
	agendaPoints: 2,
	faction: hb,
	influence: null,
	set: setNames.anr,
	attributes: "Research costReduction",
	nriKey: "01055"
}));
cards.push(new Card({
	name: "AstroScript Pilot Program",
	type: agenda,
	agendaPoints: 2,
	faction: nbn,
	influence: null,
	set: setNames.anr,
	qty: 2,
	attributes: "Initiative advancementCounters",
	nriKey: "01081"
}));
cards.push(new Card({
	name: "Breaking News",
	type: agenda,
	agendaPoints: 1,
	faction: nbn,
	influence: null,
	set: setNames.anr,
	qty: 2,
	attributes: "tags",
	nriKey: "01082"
}));
cards.push(new Card({
	name: "Hostile Takeover",
	type: agenda,
	agendaPoints: 1,
	faction: wey,
	influence: null,
	set: setNames.anr,
	attributes: "Expansion badPublicity credits",
	nriKey: "01094"
}));
cards.push(new Card({
	name: "Nisei MKII",
	type: agenda,
	agendaPoints: 2,
	faction: jin,
	influence: null,
	set: setNames.anr,
	attributes: "Initiative endRun",
	nriKey: "01068"
}));
cards.push(new Card({
	name: "Posted Bounty",
	type: agenda,
	agendaPoints: 1,
	faction: wey,
	influence: null,
	set: setNames.anr,
	qty: 2,
	attributes: "Security tags badPublicity",
	nriKey: "01095"
}));
cards.push(new Card({
	name: "Priority Requisition",
	type: agenda,
	agendaPoints: 3,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "Security costReduction",
	nriKey: "01106"
}));
cards.push(new Card({
	name: "Private Security Force",
	type: agenda,
	agendaPoints: 2,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "Security tags meatDamage",
	nriKey: "01107"
}));
	
cards.push(new Card({
	name: "Adonis Campaign",
	type: asset,
	faction: hb,
	influence: 2,
	set: setNames.anr,
	attributes: "Advertisement credits",
	nriKey: "01056"
}));		
cards.push(new Card({
	name: "Aggressive Secretary",
	type: asset,
	faction: hb,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Ambush trash advanceable",
	nriKey: "01057"
}));
cards.push(new Card({
	name: "Ghost Branch",
	type: asset,
	faction: nbn,
	influence: 1,
	set: setNames.anr,
	attributes: "Ambush Facility tags advanceable",
	nriKey: "01087"
}));
cards.push(new Card({
	name: "Melange Mining Corp",
	type: asset,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	qty: 2,
	attributes: "credits",
	nriKey: "01108"
}));
cards.push(new Card({
	name: "PAD Campaign",
	type: asset,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "Advertisement credits",
	nriKey: "01109"
}));
cards.push(new Card({
	name: "Project Junebug",
	type: asset,
	faction: jin,
	influence: 1,
	set: setNames.anr,
	attributes: "Ambush Research netDamage advanceable",
	nriKey: "01069"
}));
cards.push(new Card({
	name: "Security Subcontract",
	type: asset,
	faction: wey,
	influence: 1,
	set: setNames.anr,
	qty: 1,
	attributes: "Transaction credits",
	nriKey: "01096"
}));
cards.push(new Card({
	name: "Snare",
	type: asset,
	faction: jin,
	influence: 2,
	set: setNames.anr,
	attributes: "Ambush netDamage tags",
	nriKey: "01070"
}));
cards.push(new Card({
	name: "Zaibatsu Loyalty",
	type: asset,
	faction: jin,
	influence: 1,
	set: setNames.anr,
	qty: 1,
	attributes: "",
	nriKey: "01071"
}));
		
cards.push(new Card({
	name: "Archer",
	type: ice,
	faction: wey,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Sentry Destroyer credits trash endRun",
	nriKey: "01101"
}));
cards.push(new Card({
	name: "Cell Portal",
	type: ice,
	faction: jin,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "CodeGate Deflector",
	nriKey: "01074"
}));
cards.push(new Card({
	name: "Chum",
	type: ice,
	faction: jin,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "CodeGate netDamage iceBoosting",
	nriKey: "01075"
}));
cards.push(new Card({
	name: "Data Mine",
	type: ice,
	faction: jin,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Trap AP netDamage",
	nriKey: "01076"
}));
cards.push(new Card({
	name: "Data Raven",
	type: ice,
	faction: nbn,
	influence: 2,
	set: setNames.anr,
	attributes: "Sentry Tracer Observer tags trace",
	nriKey: "01088"
}));
cards.push(new Card({
	name: "Enigma",
	type: ice,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "CodeGate endRun clickDisruption",
	nriKey: "01111"
}));
cards.push(new Card({
	name: "Hadrians Wall",
	type: ice,
	faction: wey,
	influence: 3,
	set: setNames.anr,
	qty: 2,
	attributes: "Barrier endRun advanceable",
	nriKey: "01102"
}));
cards.push(new Card({
	name: "Heimdall 1.0",
	type: ice,
	faction: hb,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Barrier Bioroid AP brainDamage endRun",
	nriKey: "01061"
}));
cards.push(new Card({
	name: "Hunter",
	type: ice,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	qty: 2,
	attributes: "Sentry Tracer Observer tags trace",
	nriKey: "01112"
}));
cards.push(new Card({
	name: "Ice Wall",
	type: ice,
	faction: wey,
	influence: 1,
	set: setNames.anr,
	attributes: "Barrier endRun advanceable",
	nriKey: "01103"
}));
cards.push(new Card({
	name: "Ichi 1.0",
	type: ice,
	faction: hb,
	influence: 2,
	set: setNames.anr,
	attributes: "Sentry Bioroid Tracer Destroyer trash tags trace brainDamage",
	nriKey: "01062"
}));
cards.push(new Card({
	name: "Matrix Analyzer",
	type: ice,
	faction: nbn,
	influence: 2,
	set: setNames.anr,
	attributes: "Sentry Tracer Observer tags trace advancementCounters",
	nriKey: "01089"
}));
cards.push(new Card({
	name: "Neural Katana",
	type: ice,
	faction: jin,
	influence: 2,
	set: setNames.anr,
	attributes: "Sentry AP netDamage",
	nriKey: "01077"
}));
cards.push(new Card({
	name: "Rototurret",
	type: ice,
	faction: hb,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Sentry Destroyer trash endRun",
	nriKey: "01064"
}));
cards.push(new Card({
	name: "Shadow",
	type: ice,
	faction: wey,
	influence: 1,
	set: setNames.anr,
	attributes: "Sentry Tracer credits tags trace advanceable",
	nriKey: "01104"
}));
cards.push(new Card({
	name: "Tollbooth",
	type: ice,
	faction: nbn,
	influence: 2,
	set: setNames.anr,
	attributes: "CodeGate endRun creditDisruption",
	nriKey: "01090"
}));
cards.push(new Card({
	name: "Viktor 1.0",
	type: ice,
	faction: hb,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "CodeGate Bioroid AP brainDamage endRun",
	nriKey: "01063"
}));
cards.push(new Card({
	name: "Wall of Static",
	type: ice,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "Barrier endRun",
	nriKey: "01113"
}));
cards.push(new Card({
	name: "Wall of Thorns",
	type: ice,
	faction: jin,
	influence: 1,
	set: setNames.anr,
	attributes: "Barrier AP netDamage endRun",
	nriKey: "01078"
}));
		
cards.push(new Card({
	name: "Aggressive Negotiation",
	type: operation,
	faction: wey,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "search",
	nriKey: "01097"
}));
cards.push(new Card({
	name: "Anonymous Tip",
	type: operation,
	faction: nbn,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "cards",
	nriKey: "01083"
}));
cards.push(new Card({
	name: "Archived Memories",
	type: operation,
	faction: hb,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "recursion",
	nriKey: "01058"
}));
cards.push(new Card({
	name: "Beanstalk Royalties",
	type: operation,
	faction: wey,
	influence: 1,
	set: setNames.anr,
	attributes: "Transaction credits",
	nriKey: "01098"
}));
cards.push(new Card({
	name: "Biotic Labor",
	type: operation,
	faction: hb,
	influence: 4,
	set: setNames.anr,
	attributes: "clicks",
	nriKey: "01059"
}));
cards.push(new Card({
	name: "Closed Accounts",
	type: operation,
	faction: nbn,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "GrayOps tags creditDisruption",
	nriKey: "01084"
}));
cards.push(new Card({
	name: "Hedge Fund",
	type: operation,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "Transaction credits",
	nriKey: "01110"
}));
cards.push(new Card({
	name: "Neural EMP",
	type: operation,
	faction: jin,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "GrayOps netDamage",
	nriKey: "01072"
}));
cards.push(new Card({
	name: "Precognition",
	type: operation,
	faction: jin,
	influence: 3,
	set: setNames.anr,
	qty: 2,
	attributes: "search",
	nriKey: "01073"
}));
cards.push(new Card({
	name: "Psychographics",
	type: operation,
	faction: nbn,
	influence: 3,
	set: setNames.anr,
	qty: 2,
	attributes: "tags advancementCounters",
	nriKey: "01085"
}));
cards.push(new Card({
	name: "Scorched Earth",
	type: operation,
	faction: wey,
	influence: 4,
	set: setNames.anr,
	qty: 2,
	attributes: "BlackOps tags meatDamage",
	nriKey: "01099"
}));
cards.push(new Card({
	name: "SEASource",
	type: operation,
	faction: nbn,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "tags trace",
	nriKey: "01086"
}));
cards.push(new Card({
	name: "Shipment from Kaguya",
	type: operation,
	faction: wey,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "advancementCounters",
	nriKey: "01100"
}));
cards.push(new Card({
	name: "Shipment from Mirrormorph",
	type: operation,
	faction: hb,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "",
	nriKey: "01060"
}));
		
cards.push(new Card({
	name: "Akitaro Watanabe",
	type: upgrade,
	faction: jin,
	influence: 2,
	set: setNames.anr,
	qty: 1,
	attributes: "Sysop Unorthodox costReduction unique",
	nriKey: "01079"
}));
cards.push(new Card({
	name: "Corporate Troubleshooter",
	type: upgrade,
	faction: hb,
	influence: 1,
	set: setNames.anr,
	qty: 1,
	attributes: "Connection iceBoosting",
	nriKey: "01065"
}));
cards.push(new Card({
	name: "Experiential Data",
	type: upgrade,
	faction: hb,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "iceBoosting",
	nriKey: "01066"
}));
cards.push(new Card({
	name: "Red Herrings",
	type: upgrade,
	faction: nbn,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "",
	nriKey: "01091"
}));
cards.push(new Card({
	name: "Research Station",
	type: upgrade,
	faction: wey,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Facility handSize",
	nriKey: "01105"
}));
cards.push(new Card({
	name: "SanSan City Grid",
	type: upgrade,
	faction: nbn,
	influence: 3,
	set: setNames.anr,
	qty: 1,
	attributes: "Region advancementCounters",
	nriKey: "01092"
}));
		
cards.push(new Card({
	name: "Gabriel Santiago",
	type: identity,
	faction: crim,
	influence: null,
	set: setNames.anr,
	qty: 1,
	attributes: "Cyborg credits",
	nriKey: "01017"
}));
cards.push(new Card({
	name: "Kate \"Mac\" McCaffrey",
	key: "KateMacMcCaffery",
	type: identity,
	faction: shap,
	influence: null,
	set: setNames.anr,
	qty: 1,
	attributes: "Natural costReduction link",
	nriKey: "01033"
}));
cards.push(new Card({
	name: "Noise",
	type: identity,
	faction: ana,
	influence: null,
	set: setNames.anr,
	qty: 1,
	attributes: "G-mod deckDisruption",
	nriKey: "01001"
}));
		
cards.push(new Card({
	name: "Account Siphon",
	type: event,
	faction: crim,
	influence: 4,
	set: setNames.anr,
	qty: 2,
	attributes: "Run Sabotage credits creditDisruption tags",
	nriKey: "01018"
}));
cards.push(new Card({
	name: "Deja Vu",
	type: event,
	faction: ana,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "recursion virusHelper",
	nriKey: "01002"
}));
cards.push(new Card({
	name: "Demolition Run",
	type: event,
	faction: ana,
	influence: 2,
	set: setNames.anr,
	attributes: "Run Sabotage handDisruption deckDisruption trash",
	nriKey: "01003"
}));
cards.push(new Card({
	name: "Diesel",
	type: event,
	faction: shap,
	influence: 2,
	set: setNames.anr,
	attributes: "cards",
	nriKey: "01034"
}));
cards.push(new Card({
	name: "Easy Mark",
	type: event,
	faction: crim,
	influence: 1,
	set: setNames.anr,
	attributes: "Job credits",
	nriKey: "01019"
}));
cards.push(new Card({
	name: "Forged Activation Orders",
	type: event,
	faction: crim,
	influence: 2,
	set: setNames.anr,
	attributes: "Sabotage iceDisruption",
	nriKey: "01020"
}));
cards.push(new Card({
	name: "Infiltration",
	type: event,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "expose credits",
	nriKey: "01049"
}));
cards.push(new Card({
	name: "Inside Job",
	type: event,
	faction: crim,
	influence: 3,
	set: setNames.anr,
	attributes: "Run",
	nriKey: "01021"
}));
cards.push(new Card({
	name: "Modded",
	type: event,
	faction: shap,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Mod costReduction",
	nriKey: "01035"
}));
cards.push(new Card({
	name: "Special Order",
	type: event,
	faction: crim,
	influence: 2,
	set: setNames.anr,
	attributes: "search",
	nriKey: "01022"
}));
cards.push(new Card({
	name: "Stimhack",
	type: event,
	faction: ana,
	influence: 1,
	set: setNames.anr,
	attributes: "Run credits",
	nriKey: "01004"
}));
cards.push(new Card({
	name: "Sure Gamble",
	type: event,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "credits",
	nriKey: "01050"
}));
cards.push(new Card({
	name: "The Makers Eye",
	type: event,
	faction: shap,
	influence: 2,
	set: setNames.anr,
	attributes: "Run deckDisruption",
	nriKey: "01036"
}));
cards.push(new Card({
	name: "Tinkering",
	type: event,
	faction: shap,
	influence: 4,
	set: setNames.anr,
	attributes: "Mod iceDisruption",
	nriKey: "01037"
}));
		
cards.push(new Card({
	name: "Akamatsu Mem Chip",
	type: hardware,
	faction: shap,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Chip memory",
	nriKey: "01038"
}));
cards.push(new Card({
	name: "Cyberfeeder",
	type: hardware,
	faction: ana,
	influence: 1,
	set: setNames.anr,
	attributes: "Chip recurringCredits virusHelper",
	nriKey: "01005"
}));
cards.push(new Card({
	name: "Desperado",
	type: hardware,
	faction: crim,
	influence: 3,
	set: setNames.anr,
	qty: 1,
	attributes: "Console memory credits unique",
	nriKey: "01024"
}));
cards.push(new Card({
	name: "Grimoire",
	type: hardware,
	faction: ana,
	influence: 2,
	set: setNames.anr,
	qty: 1,
	attributes: "Console memory virusHelper unique",
	nriKey: "01006"
}));
cards.push(new Card({
	name: "Lemuria Codecracker",
	type: hardware,
	faction: crim,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "expose",
	nriKey: "01023"
}));
cards.push(new Card({
	name: "Rabbit Hole",
	type: hardware,
	faction: shap,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Link link",
	nriKey: "01039"
}));
cards.push(new Card({
	name: "The Personal Touch",
	type: hardware,
	faction: shap,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Mod",
	nriKey: "01040"
}));
cards.push(new Card({
	name: "The Toolbox",
	type: hardware,
	faction: shap,
	influence: 2,
	set: setNames.anr,
	qty: 1,
	attributes: "Console memory recurringCredits link unique",
	nriKey: "01041"
}));
		
cards.push(new Card({
	name: "Aurora",
	type: program,
	faction: crim,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker Fracter",
	nriKey: "01025"
}));
cards.push(new Card({
	name: "Battering Ram",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker Fracter",
	nriKey: "01042"
}));
cards.push(new Card({
	name: "Corroder",
	type: program,
	faction: ana,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker Fracter",
	nriKey: "01007"
}));
cards.push(new Card({
	name: "Crypsis",
	type: program,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "Icebreaker AI Virus",
	nriKey: "01051"
}));
cards.push(new Card({
	name: "Datasucker",
	type: program,
	faction: ana,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Virus iceDisruption",
	nriKey: "01008"
}));
cards.push(new Card({
	name: "Djinn",
	type: program,
	faction: ana,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Daemon memory search virusHelper",
	nriKey: "01009"
}));
cards.push(new Card({
	name: "Femme Fatale",
	type: program,
	faction: crim,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker Killer",
	nriKey: "01026"
}));
cards.push(new Card({
	name: "Gordian Blade",
	type: program,
	faction: shap,
	influence: 3,
	set: setNames.anr,
	attributes: "Icebreaker Decoder",
	nriKey: "01043"
}));
cards.push(new Card({
	name: "Magnum Opus",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "credits",
	nriKey: "01044"
}));
cards.push(new Card({
	name: "Medium",
	type: program,
	faction: ana,
	influence: 3,
	set: setNames.anr,
	qty: 2,
	attributes: "Virus deckDisruption",
	nriKey: "01010"
}));
cards.push(new Card({
	name: "Mimic",
	type: program,
	faction: ana,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker Killer",
	nriKey: "01011"
}));
cards.push(new Card({
	name: "Net Shield",
	type: program,
	faction: shap,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "netDamage",
	nriKey: "01045"
}));
cards.push(new Card({
	name: "Ninja",
	type: program,
	faction: crim,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker Killer",
	nriKey: "01027"
}));
cards.push(new Card({
	name: "Parasite",
	type: program,
	faction: ana,
	influence: 2,
	set: setNames.anr,
	attributes: "Virus iceDisruption",
	nriKey: "01012"
}));
cards.push(new Card({
	name: "Pipeline",
	type: program,
	faction: shap,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker Killer",
	nriKey: "01046"
}));
cards.push(new Card({
	name: "Sneakdoor Beta",
	type: program,
	faction: crim,
	influence: 3,
	set: setNames.anr,
	qty: 2,
	attributes: "",
	nriKey: "01028"
}));
cards.push(new Card({
	name: "Wyrm",
	type: program,
	faction: ana,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker AI",
	nriKey: "01013"
}));
cards.push(new Card({
	name: "Yog.0",
	type: program,
	faction: ana,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Icebreaker Decoder",
	nriKey: "01014"
}));
		
cards.push(new Card({
	name: "Access to Globalsec",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "Link link",
	nriKey: "01052"
}));
cards.push(new Card({
	name: "Aesops Pawnshop",
	type: resource,
	faction: shap,
	influence: 2,
	set: setNames.anr,
	qty: 1,
	attributes: "Location Connection credits unique",
	nriKey: "01047"
}));
cards.push(new Card({
	name: "Armitage Codebusting",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.anr,
	attributes: "Job credits",
	nriKey: "01053"
}));
cards.push(new Card({
	name: "Bank Job",
	type: resource,
	faction: crim,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Job credits",
	nriKey: "01029"
}));
cards.push(new Card({
	name: "Crash Space",
	type: resource,
	faction: crim,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Location tags recurringCredits meatDamage",
	nriKey: "01030"
}));
cards.push(new Card({
	name: "Data Dealer",
	type: resource,
	faction: crim,
	influence: 2,
	set: setNames.anr,
	qty: 1,
	attributes: "Connection Seedy credits",
	nriKey: "01031"
}));
cards.push(new Card({
	name: "Decoy",
	type: resource,
	faction: crim,
	influence: 2,
	set: setNames.anr,
	qty: 2,
	attributes: "Connection tags",
	nriKey: "01032"
}));
cards.push(new Card({
	name: "Ice Carver",
	type: resource,
	faction: ana,
	influence: 3,
	set: setNames.anr,
	qty: 1,
	attributes: "Virtual iceDisruption unique",
	nriKey: "01015"
}));
cards.push(new Card({
	name: "Sacrificial Construct",
	type: resource,
	faction: shap,
	influence: 1,
	set: setNames.anr,
	qty: 2,
	attributes: "Remote trashProtection",
	nriKey: "01048"
}));
cards.push(new Card({
	name: "Wyldside",
	type: resource,
	faction: ana,
	influence: 3,
	set: setNames.anr,
	qty: 2,
	attributes: "Location Seedy cards unique",
	nriKey: "01016"
}));

// Genesis 1 - What Lies Ahead

cards.push(new Card({
	name: "Whizzard",
	type: identity,
	faction: ana,
	influence: null,
	set: setNames.gen1,
	attributes: "Natural recurringCredits trash",
	nriKey: "02001"
}));
cards.push(new Card({
	name: "Spinal Modem",
	type: hardware,
	faction: ana,
	influence: 2,
	set: setNames.gen1,
	attributes: "Console memory recurringCredits unique",
	nriKey: "02002"
}));
cards.push(new Card({
	name: "Imp",
	type: program,
	faction: ana,
	influence: 3,
	set: setNames.gen1,
	attributes: "Virus trash",
	nriKey: "02003"
}));
cards.push(new Card({
	name: "Morning Star",
	type: program,
	faction: ana,
	influence: 4,
	set: setNames.gen1,
	attributes: "Icebreaker Fracter",
	nriKey: "02004"
}));
cards.push(new Card({
	name: "Cortez Chip",
	type: hardware,
	faction: crim,
	influence: 2,
	set: setNames.gen1,
	attributes: "Chip iceDisruption",
	nriKey: "02005"
}));
cards.push(new Card({
	name: "Peacock",
	type: program,
	faction: crim,
	influence: 2,
	set: setNames.gen1,
	attributes: "Icebreaker Decoder",
	nriKey: "02006"
}));
cards.push(new Card({
	name: "ZU.13 Key Master",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.gen1,
	attributes: "Icebreaker Decoder Cloud",
	nriKey: "02007"
}));
cards.push(new Card({
	name: "The Helpful AI",
	type: resource,
	faction: shap,
	influence: 2,
	set: setNames.gen1,
	attributes: "Connection Link Virtual link unique",
	nriKey: "02008"
}));
cards.push(new Card({
	name: "Plascrete Carapace",
	type: hardware,
	faction: neut,
	influence: 0,
	set: setNames.gen1,
	attributes: "Gear meatDamage",
	nriKey: "02009"
}));
cards.push(new Card({
	name: "Project Atlas",
	type: agenda,
	agendaPoints: 2,
	faction: wey,
	influence: null,
	set: setNames.gen1,
	attributes: "Research search",
	nriKey: "02018"
}));
cards.push(new Card({
	name: "Mandatory Upgrades",
	type: agenda,
	agendaPoints: 2,
	faction: hb,
	influence: null,
	set: setNames.gen1,
	attributes: "Initiative clicks",
	nriKey: "02011"
}));
cards.push(new Card({
	name: "Braintrust",
	type: agenda,
	agendaPoints: 2,
	faction: jin,
	influence: null,
	set: setNames.gen1,
	attributes: "Research costReduction",
	nriKey: "02014"
}));
cards.push(new Card({
	name: "Restructured Datapool",
	type: agenda,
	agendaPoints: 3,
	faction: nbn,
	influence: null,
	set: setNames.gen1,
	attributes: "Initiative tags trace",
	nriKey: "02016"
}));
cards.push(new Card({
	name: "Stronger Together",
	type: identity,
	faction: hb,
	influence: null,
	set: setNames.gen1,
	attributes: "Megacorp iceBoosting",
	nriKey: "02010"
}));
cards.push(new Card({
	name: "Ash 2X3ZB9CY",
	type: upgrade,
	faction: hb,
	influence: 2,
	set: setNames.gen1,
	attributes: "Bioroid trace unique",
	nriKey: "02013"
}));
cards.push(new Card({
	name: "Janus 1.0",
	type: ice,
	faction: hb,
	influence: 3,
	set: setNames.gen1,
	attributes: "Sentry Bioroid AP brainDamage",
	nriKey: "02012"
}));
cards.push(new Card({
	name: "Snowflake",
	type: ice,
	faction: jin,
	influence: 2,
	set: setNames.gen1,
	attributes: "Barrier Psi endRun",
	nriKey: "02015"
}));
cards.push(new Card({
	name: "TMI",
	type: ice,
	faction: nbn,
	influence: 1,
	set: setNames.gen1,
	attributes: "Barrier endRun trace",
	nriKey: "02017"
}));
cards.push(new Card({
	name: "Caduceus",
	type: ice,
	faction: wey,
	influence: 2,
	set: setNames.gen1,
	attributes: "Sentry Tracer credits trace endRun",
	nriKey: "02019"
}));
cards.push(new Card({
	name: "Draco",
	type: ice,
	faction: neut,
	influence: 0,
	set: setNames.gen1,
	attributes: "Sentry Tracer trace tags endRun",
	nriKey: "02020"
}));

// Genesis 2 - Trace Amount

cards.push(new Card({
	name: "Freelancer",
	type: operation,
	faction: neut,
	influence: 0,
	set: setNames.gen2,
	attributes: "GrayOps trash tags",
	nriKey: "02040"
}));
cards.push(new Card({
	name: "E3 Feedback Implants",
	type: hardware,
	faction: crim,
	influence: 2,
	set: setNames.gen2,
	attributes: "Mod",
	nriKey: "02024"
}));
cards.push(new Card({
	name: "Amazon Industrial Zone",
	type: upgrade,
	faction: wey,
	influence: 1,
	set: setNames.gen2,
	attributes: "Region costReduction",
	nriKey: "02038"
}));
cards.push(new Card({
	name: "Big Brother",
	type: operation,
	faction: nbn,
	influence: 1,
	set: setNames.gen2,
	attributes: "GrayOps tags",
	nriKey: "02035"
}));
cards.push(new Card({
	name: "ChiLo City Grid",
	type: upgrade,
	faction: nbn,
	influence: 2,
	set: setNames.gen2,
	attributes: "Region trace tags",
	nriKey: "02036"
}));
cards.push(new Card({
	name: "Compromised Employee",
	type: resource,
	faction: crim,
	influence: 1,
	set: setNames.gen2,
	attributes: "Link Connection trace credits recurringCredits",
	nriKey: "02025"
}));
cards.push(new Card({
	name: "Dyson Mem Chip",
	type: hardware,
	faction: neut,
	influence: 0,
	set: setNames.gen2,
	attributes: "Chip Link memory link",
	nriKey: "02028"
}));
cards.push(new Card({
	name: "Encryption Protocol",
	type: asset,
	faction: hb,
	influence: 1,
	set: setNames.gen2,
	attributes: "trashProtection",
	nriKey: "02029"
}));
cards.push(new Card({
	name: "Executive Retreat",
	type: agenda,
	faction: neut,
	influence: 0,
	set: setNames.gen2,
	attributes: "cards",
	agendaPoints: 3,
	nriKey: "02039"
}));
cards.push(new Card({
	name: "Liberated Account",
	type: resource,
	faction: ana,
	influence: 2,
	set: setNames.gen2,
	attributes: "credits",
	nriKey: "02022"
}));
cards.push(new Card({
	name: "Notoriety",
	type: event,
	faction: shap,
	influence: 1,
	set: setNames.gen2,
	attributes: "",
	nriKey: "02026"
}));
cards.push(new Card({
	name: "Power Grid Overload",
	type: operation,
	faction: wey,
	influence: 1,
	set: setNames.gen2,
	attributes: "trace trash",
	nriKey: "02037"
}));
cards.push(new Card({
	name: "Satellite Uplink",
	type: event,
	faction: crim,
	influence: 3,
	set: setNames.gen2,
	attributes: "expose",
	nriKey: "02023"
}));
cards.push(new Card({
	name: "Sensei",
	type: ice,
	faction: jin,
	influence: 1,
	set: setNames.gen2,
	attributes: "CodeGate endRun iceBoosting",
	nriKey: "02034"
}));
cards.push(new Card({
	name: "Sherlock 1.0",
	type: ice,
	faction: hb,
	influence: 2,
	set: setNames.gen2,
	attributes: "Sentry Bioroid Tracer trace trash",
	nriKey: "02030"
}));
cards.push(new Card({
	name: "Snowball",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.gen2,
	attributes: "Icebreaker Fracter",
	nriKey: "02027"
}));
cards.push(new Card({
	name: "Vamp",
	type: event,
	faction: ana,
	influence: 2,
	set: setNames.gen2,
	attributes: "Run Sabotage creditDisruption tags",
	nriKey: "02021"
}));
cards.push(new Card({
	name: "Replicating Perfection",
	type: identity,
	faction: jin,
	set: setNames.gen2,
	attributes: "Megacorp",
	nriKey: "02031"
}));
cards.push(new Card({
	name: "Fetal AI",
	type: agenda,
	faction: jin,
	set: setNames.gen2,
	agendaPoints: 2,
	attributes: "Ambush netDamage",
	nriKey: "02032"
}));
cards.push(new Card({
	name: "Trick Of Light",
	type: operation,
	faction: jin,
	influence: 3,
	set: setNames.gen2,
	attributes: "advancementCounters",
	nriKey: "02033"
}));

// Genesis 3 - Cyber Exodus

cards.push(new Card({
	name: "Chaos Theory",
	type: identity,
	faction: shap,
	set: setNames.gen3,
	minCards: 40,
	attributes: "G-mod memory",
	nriKey: "02046"
}));
cards.push(new Card({
	name: "Chimera",
	type: ice,
	faction: neut,
	influence: 0,
	set: setNames.gen3,
	attributes: "Mythic endRun",
	nriKey: "02060"
}));
cards.push(new Card({
	name: "Commercialization",
	type: operation,
	faction: wey,
	influence: 1,
	set: setNames.gen3,
	attributes: "Transaction credits",
	nriKey: "02058"
}));
cards.push(new Card({
	name: "Dinosaurus",
	type: hardware,
	faction: shap,
	influence: 2,
	set: setNames.gen3,
	attributes: "Console memory unique",
	nriKey: "02048"
}));
cards.push(new Card({
	name: "Edge of World",
	type: asset,
	faction: jin,
	influence: 2,
	set: setNames.gen3,
	attributes: "Ambush brainDamage",
	nriKey: "02053"
}));
cards.push(new Card({
	name: "Emergency Shutdown",
	type: event,
	faction: crim,
	influence: 2,
	set: setNames.gen3,
	attributes: "Sabotage iceDisruption",
	nriKey: "02043"
}));
cards.push(new Card({
	name: "Joshua B",
	type: resource,
	faction: ana,
	influence: 3,
	set: setNames.gen3,
	attributes: "Connection clicks unique tags",
	nriKey: "02042"
}));
cards.push(new Card({
	name: "Marked Accounts",
	type: asset,
	faction: nbn,
	influence: 1,
	set: setNames.gen3,
	attributes: "Transaction credits",
	nriKey: "02055"
}));
cards.push(new Card({
	name: "Muresh Bodysuit",
	type: hardware,
	faction: crim,
	influence: 1,
	set: setNames.gen3,
	attributes: "Gear meatDamage",
	nriKey: "02044"
}));
cards.push(new Card({
	name: "Nerve Agent",
	type: program,
	faction: ana,
	influence: 2,
	set: setNames.gen3,
	attributes: "Virus handDisruption",
	nriKey: "02041"
}));
cards.push(new Card({
	name: "Personal Workshop",
	type: resource,
	faction: shap,
	influence: 4,
	set: setNames.gen3,
	attributes: "Location",
	nriKey: "02049"
}));
cards.push(new Card({
	name: "Pop-up Window",
	type: ice,
	faction: nbn,
	influence: 1,
	set: setNames.gen3,
	attributes: "CodeGate Advertisement credits",
	nriKey: "02056"
}));
cards.push(new Card({
	name: "Private Contracts",
	type: asset,
	faction: neut,
	influence: 0,
	set: setNames.gen3,
	attributes: "Transaction credits",
	nriKey: "02059"
}));
cards.push(new Card({
	name: "Project Vitruvius",
	type: agenda,
	agendaPoints: 2,
	faction: hb,
	set: setNames.gen3,
	attributes: "Research recursion",
	nriKey: "02051"
}));
cards.push(new Card({
	name: "Public Sympathy",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.gen3,
	attributes: "handSize",
	nriKey: "02050"
}));
cards.push(new Card({
	name: "Snitch",
	type: program,
	faction: crim,
	influence: 2,
	set: setNames.gen3,
	attributes: "expose",
	nriKey: "02045"
}));
cards.push(new Card({
	name: "Sunset",
	type: operation,
	faction: jin,
	influence: 1,
	set: setNames.gen3,
	attributes: "",
	nriKey: "02054"
}));
cards.push(new Card({
	name: "Test Run",
	type: event,
	faction: shap,
	influence: 3,
	set: setNames.gen3,
	attributes: "search recursion",
	nriKey: "02047"
}));
cards.push(new Card({
	name: "Viper",
	type: ice,
	faction: hb,
	influence: 1,
	set: setNames.gen3,
	attributes: "CodeGate Tracer trace endRun clickDisruption",
	nriKey: "02052"
}));
cards.push(new Card({
	name: "Woodcutter",
	type: ice,
	faction: wey,
	influence: 3,
	set: setNames.gen3,
	attributes: "Sentry AP netDamage advanceable",
	nriKey: "02057"
}));

// Genesis 4 - A Study in Static

cards.push(new Card({
	name: "All Nighter",
	type: resource,
	faction: shap,
	influence: 2,
	set: setNames.gen4,
	attributes: "clicks",
	nriKey: "02067"
}));
cards.push(new Card({
	name: "Because We Built It",
	type: identity,
	faction: wey,
	set: setNames.gen4,
	attributes: "Megacorp advancementCounters recurringCredits",
	nriKey: "02076"
}));
cards.push(new Card({
	name: "Bullfrog",
	type: ice,
	faction: jin,
	influence: 2,
	set: setNames.gen4,
	attributes: "CodeGate Deflector Psi",
	nriKey: "02073"
}));
cards.push(new Card({
	name: "Crescentus",
	type: program,
	faction: crim,
	influence: 1,
	set: setNames.gen4,
	attributes: "iceDisruption",
	nriKey: "02065"
}));
cards.push(new Card({
	name: "Dedicated Server",
	type: asset,
	faction: jin,
	influence: 2,
	set: setNames.gen4,
	attributes: "Facility recurringCredits",
	nriKey: "02072"
}));
cards.push(new Card({
	name: "Deus X",
	type: program,
	faction: shap,
	influence: 1,
	set: setNames.gen4,
	attributes: "Icebreaker netDamage",
	nriKey: "02066"
}));
cards.push(new Card({
	name: "Disrupter",
	type: program,
	faction: ana,
	influence: 1,
	set: setNames.gen4,
	attributes: "trace",
	nriKey: "02061"
}));
cards.push(new Card({
	name: "Doppelganger",
	type: hardware,
	faction: crim,
	influence: 2,
	set: setNames.gen4,
	attributes: "Console memory unique",
	nriKey: "02064"
}));
cards.push(new Card({
	name: "False Lead",
	type: agenda,
	faction: neut,
	influence: 0,
	set: setNames.gen4,
	attributes: "Security clickDisruption",
	agendaPoints: 1,
	nriKey: "02080"
}));
cards.push(new Card({
	name: "Force of Nature",
	type: program,
	faction: ana,
	influence: 1,
	set: setNames.gen4,
	attributes: "Icebreaker Decoder",
	nriKey: "02062"
}));
cards.push(new Card({
	name: "Government Contracts",
	type: agenda,
	faction: wey,
	set: setNames.gen4,
	attributes: "credits",
	agendaPoints: 3,
	nriKey: "02077"
}));
cards.push(new Card({
	name: "Green Level Clearance",
	type: operation,
	faction: hb,
	influence: 1,
	set: setNames.gen4,
	attributes: "Transaction cards credits",
	nriKey: "02070"
}));
cards.push(new Card({
	name: "Hourglass",
	type: ice,
	faction: hb,
	influence: 2,
	set: setNames.gen4,
	attributes: "CodeGate clickDisruption",
	nriKey: "02071"
}));
cards.push(new Card({
	name: "Inside Man",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.gen4,
	attributes: "Connection recurringCredits",
	nriKey: "02068"
}));
cards.push(new Card({
	name: "Net Police",
	type: asset,
	faction: nbn,
	influence: 2,
	set: setNames.gen4,
	attributes: "trace link recurringCredits",
	nriKey: "02075"
}));
cards.push(new Card({
	name: "Oversight AI",
	type: operation,
	faction: wey,
	influence: 2,
	set: setNames.gen4,
	attributes: "Condition costReduction",
	nriKey: "02079"
}));
cards.push(new Card({
	name: "Scrubber",
	type: resource,
	faction: ana,
	influence: 1,
	set: setNames.gen4,
	attributes: "Connection Seedy trash recurringCredits",
	nriKey: "02063"
}));
cards.push(new Card({
	name: "Tyrant",
	type: ice,
	faction: wey,
	influence: 2,
	set: setNames.gen4,
	attributes: "Barrier endRun advanceable",
	nriKey: "02078"
}));
cards.push(new Card({
	name: "Underworld Contact",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.gen4,
	attributes: "Connection link credits",
	nriKey: "02069"
}));
cards.push(new Card({
	name: "Uroboros",
	type: ice,
	faction: nbn,
	influence: 2,
	set: setNames.gen4,
	attributes: "Sentry Tracer trace endRun",
	nriKey: "02074"
}));

// Genesis 5 - Humanity's Shadow

cards.push(new Card({
	name: "Andromeda",
	type: identity,
	faction: crim,
	set: setNames.gen5,
	attributes: "Natural cards link",
	nriKey: "02083"
}));
cards.push(new Card({
	name: "Bernice Mai",
	type: upgrade,
	faction: nbn,
	influence: 2,
	set: setNames.gen5,
	attributes: "Sysop trace tags unique",
	nriKey: "02097"
}));
cards.push(new Card({
	name: "Creeper",
	type: program,
	faction: shap,
	influence: 1,
	set: setNames.gen5,
	attributes: "Icebreaker Killer Cloud",
	nriKey: "02089"
}));
cards.push(new Card({
	name: "Data Hound",
	type: ice,
	faction: nbn,
	influence: 1,
	set: setNames.gen5,
	attributes: "Sentry Tracer Observer trace trash deckDisruption",
	nriKey: "02096"
}));
cards.push(new Card({
	name: "Eve Campaign",
	type: asset,
	faction: hb,
	influence: 3,
	set: setNames.gen5,
	attributes: "Advertisement credits",
	nriKey: "02092"
}));
cards.push(new Card({
	name: "Foxfire",
	type: operation,
	faction: neut,
	influence: 0,
	set: setNames.gen5,
	attributes: "trace trash",
	nriKey: "02100"
}));
cards.push(new Card({
	name: "Hokusai Grid",
	type: upgrade,
	faction: jin,
	influence: 2,
	set: setNames.gen5,
	attributes: "Region netDamage",
	nriKey: "02095"
}));
cards.push(new Card({
	name: "HQInterface",
	type: hardware,
	faction: crim,
	influence: 2,
	set: setNames.gen5,
	attributes: "handDisruption",
	nriKey: "02085"
}));
cards.push(new Card({
	name: "Kati Jones",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.gen5,
	attributes: "Connection credits unique",
	nriKey: "02091"
}));
cards.push(new Card({
	name: "Kraken",
	type: event,
	faction: neut,
	influence: 0,
	set: setNames.gen5,
	attributes: "iceDisruption trash",
	nriKey: "02090"
}));
cards.push(new Card({
	name: "Networking",
	type: event,
	faction: crim,
	influence: 1,
	set: setNames.gen5,
	attributes: "tags",
	nriKey: "02084"
}));
cards.push(new Card({
	name: "Pheromones",
	type: program,
	faction: crim,
	influence: 2,
	set: setNames.gen5,
	attributes: "Virus recurringCredits",
	nriKey: "02086"
}));
cards.push(new Card({
	name: "Quality Time",
	type: event,
	faction: shap,
	influence: 1,
	set: setNames.gen5,
	attributes: "cards",
	nriKey: "02087"
}));
cards.push(new Card({
	name: "Replicator",
	type: hardware,
	faction: shap,
	influence: 2,
	set: setNames.gen5,
	attributes: "search",
	nriKey: "02088"
}));
cards.push(new Card({
	name: "Rework",
	type: operation,
	faction: hb,
	influence: 1,
	set: setNames.gen5,
	attributes: "",
	nriKey: "02093"
}));
cards.push(new Card({
	name: "Salvage",
	type: ice,
	faction: wey,
	influence: 2,
	set: setNames.gen5,
	attributes: "CodeGate Tracer trace advanceable tags",
	nriKey: "02098"
}));
cards.push(new Card({
	name: "Simone Diego",
	type: upgrade,
	faction: wey,
	influence: 2,
	set: setNames.gen5,
	attributes: "Sysop recurringCredits advancementCounters unique",
	nriKey: "02099"
}));
cards.push(new Card({
	name: "Surge",
	type: event,
	faction: ana,
	influence: 1,
	set: setNames.gen5,
	attributes: "virusHelper",
	nriKey: "02081"
}));
cards.push(new Card({
	name: "Whirlpool",
	type: ice,
	faction: jin,
	influence: 2,
	set: setNames.gen5,
	attributes: "Trap",
	nriKey: "02094"
}));
cards.push(new Card({
	name: "Xanadu",
	type: resource,
	faction: ana,
	influence: 2,
	set: setNames.gen5,
	attributes: "Virtual iceDisruption unique",
	nriKey: "02082"
}));
cards.push(new Card({
	name: "Retrieval Run",
	type: event,
	faction: ana,
	influence: 2,
	set: setNames.gen6,
	attributes: "Run recursion",
	nriKey: "02101"
}));

// Genesis 6 - Future Proof

cards.push(new Card({
	name: "Data Leak Reversal",
	type: resource,
	faction: ana,
	influence: 1,
	set: setNames.gen6,
	attributes: "Virtual Sabotage tags deckDisruption",
	nriKey: "02103"
}));
cards.push(new Card({
	name: "Faerie",
	type: program,
	faction: crim,
	influence: 3,
	set: setNames.gen6,
	attributes: "Icebreaker Killer",
	nriKey: "02104"
}));
cards.push(new Card({
	name: "Mr. Li",
	type: resource,
	faction: crim,
	influence: 2,
	set: setNames.gen6,
	attributes: "Connection cards unique",
	nriKey: "02105"
}));
cards.push(new Card({
	name: "Indexing",
	type: event,
	faction: shap,
	influence: 3,
	set: setNames.gen6,
	attributes: "Run deckDisruption",
	nriKey: "02106"
}));
cards.push(new Card({
	name: "R&D Interface",
	type: hardware,
	faction: shap,
	influence: 2,
	set: setNames.gen6,
	attributes: "deckDisruption",
	nriKey: "02107"
}));
cards.push(new Card({
	name: "Deep Thought",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.gen6,
	attributes: "Virus deckDisruption",
	nriKey: "02108"
}));
cards.push(new Card({
	name: "New Angeles City Hall",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.gen6,
	attributes: "Location Government tags unique",
	nriKey: "02109"
}));
cards.push(new Card({
	name: "Eli 1.0",
	type: ice,
	faction: hb,
	influence: 1,
	set: setNames.gen6,
	attributes: "Barrier Bioroid endRun",
	nriKey: "02110"
}));
cards.push(new Card({
	name: "Ruhr Valley",
	type: upgrade,
	faction: hb,
	influence: 3,
	set: setNames.gen6,
	attributes: "Region clickDisruption",
	nriKey: "02111"
}));
cards.push(new Card({
	name: "Midori",
	type: upgrade,
	faction: jin,
	influence: 3,
	set: setNames.gen6,
	attributes: "Sysop unique",
	nriKey: "02113"
}));
cards.push(new Card({
	name: "The World is Yours",
	type: identity,
	faction: nbn,
	set: setNames.gen6,
	attributes: "Megacorp handSize",
	minCards: 40,
	influenceAvailable: 12,
	nriKey: "02114"
}));
cards.push(new Card({
	name: "Midseason Replacements",
	type: operation,
	faction: nbn,
	influence: 4,
	set: setNames.gen6,
	attributes: "trace tags",
	nriKey: "02116"
}));
cards.push(new Card({
	name: "Burke Bugs",
	type: ice,
	faction: wey,
	influence: 1,
	set: setNames.gen6,
	attributes: "Sentry Destroyer trace trash",
	nriKey: "02119"
}));
cards.push(new Card({
	name: "Flare",
	type: ice,
	faction: nbn,
	influence: 3,
	set: setNames.gen6,
	attributes: "Sentry Tracer AP trace trash endRun meatDamage",
	nriKey: "02117"
}));
cards.push(new Card({
	name: "Darwin",
	type: program,
	faction: ana,
	influence: 3,
	set: setNames.gen6,
	attributes: "Icebreaker AI Virus",
	nriKey: "02102"
}));
cards.push(new Card({
	name: "Project Beale",
	type: agenda,
	faction: nbn,
	set: setNames.gen6,
	attributes: "Research",
	agendaPoints: 2,
	nriKey: "02115"
}));
cards.push(new Card({
	name: "Corporate War",
	type: agenda,
	faction: neut,
	influence: 0,
	set: setNames.gen6,
	attributes: "Expansion credits",
	agendaPoints: 2,
	nriKey: "02120"
}));
cards.push(new Card({
	name: "Ronin",
	type: asset,
	faction: jin,
	influence: 4,
	set: setNames.gen6,
	attributes: "Hostile netDamage advanceable",
	nriKey: "02112"
}));
cards.push(new Card({
	name: "Dedicated Response Team",
	type: asset,
	faction: wey,
	influence: 3,
	set: setNames.gen6,
	attributes: "Hostile tags meatDamage",
	nriKey: "02118"
}));

// Creation & Control

cards.push(new Card({
	name: "Cerebral Imaging",
	type: identity,
	faction: hb,
	set: setNames.cnc,
	attributes: "Division handSize",
	nriKey: "03001"
}));
cards.push(new Card({
	name: "Custom Biotics",
	type: identity,
	faction: hb,
	influenceAvailable: 22,
	set: setNames.cnc,
	attributes: "Division",
	nriKey: "03002",
	validate: function (card) {
		if (card.faction === jin) { return false; }
		return true;
	}
}));
cards.push(new Card({
	name: "Next Design",
	type: identity,
	faction: hb,
	influenceAvailable: 12,
	set: setNames.cnc,
	attributes: "Division",
	nriKey: "03003"
}));
cards.push(new Card({
	name: "Director Haas' Pet Project",
	type: agenda,
	faction: hb,
	agendaPoints: 1,
	set: setNames.cnc,
	attributes: "Initiative unique",
	nriKey: "03004"
}));
cards.push(new Card({
	name: "Efficiency Committee",
	type: agenda,
	faction: hb,
	agendaPoints: 2,
	set: setNames.cnc,
	attributes: "Initiative clicks",
	nriKey: "03005"
}));
cards.push(new Card({
	name: "Project Wotan",
	type: agenda,
	faction: hb,
	agendaPoints: 3,
	set: setNames.cnc,
	attributes: "Research",
	nriKey: "03006"
}));
cards.push(new Card({
	name: "Sentinel Defense Program",
	type: agenda,
	faction: hb,
	agendaPoints: 2,
	set: setNames.cnc,
	attributes: "Security netDamage brainDamage",
	nriKey: "03007"
}));
cards.push(new Card({
	name: "Alix T4LB07",
	type: asset,
	faction: hb,
	influence: 1,
	set: setNames.cnc,
	attributes: "Bioroid credits unique",
	nriKey: "03008"
}));
cards.push(new Card({
	name: "Cerebral Overwriter",
	type: asset,
	faction: hb,
	influence: 2,
	set: setNames.cnc,
	attributes: "Ambush brainDamage advanceable",
	nriKey: "03009"
}));
cards.push(new Card({
	name: "Director Haas",
	type: asset,
	faction: hb,
	influence: 5,
	set: setNames.cnc,
	attributes: "Executive clicks unique",
	nriKey: "03010"
}));
cards.push(new Card({
	name: "Haas Arcology AI",
	type: asset,
	faction: hb,
	influence: 4,
	set: setNames.cnc,
	attributes: "advanceable clicks",
	nriKey: "03011"
}));
cards.push(new Card({
	name: "Thomas Haas",
	type: asset,
	faction: hb,
	influence: 1,
	set: setNames.cnc,
	attributes: "Executive advanceable credits unique",
	nriKey: "03012"
}));
cards.push(new Card({
	name: "Bioroid Efficiency Research",
	type: operation,
	faction: hb,
	influence: 2,
	set: setNames.cnc,
	attributes: "Condition costReduction",
	nriKey: "03013"
}));
cards.push(new Card({
	name: "Successful Demonstration",
	type: operation,
	faction: hb,
	influence: 1,
	set: setNames.cnc,
	attributes: "Transaction credits",
	nriKey: "03014"
}));
cards.push(new Card({
	name: "Heimdall 2.0",
	type: ice,
	faction: hb,
	influence: 3,
	set: setNames.cnc,
	attributes: "Barrier Bioroid AP brainDamage endRun",
	nriKey: "03015"
}));
cards.push(new Card({
	name: "Howler",
	type: ice,
	faction: hb,
	influence: 1,
	set: setNames.cnc,
	attributes: "Trap recursion costReduction",
	nriKey: "03016"
}));
cards.push(new Card({
	name: "Ichi 2.0",
	type: ice,
	faction: hb,
	influence: 3,
	set: setNames.cnc,
	attributes: "Sentry Bioroid Destroyer Tracer trash trace tags brainDamage",
	nriKey: "03017"
}));
cards.push(new Card({
	name: "Minelayer",
	type: ice,
	faction: hb,
	influence: 1,
	set: setNames.cnc,
	attributes: "CodeGate costReduction",
	nriKey: "03018"
}));
cards.push(new Card({
	name: "Viktor 2.0",
	type: ice,
	faction: hb,
	influence: 3,
	set: setNames.cnc,
	attributes: "CodeGate Bioroid Tracer AP trace endRun brainDamage",
	nriKey: "03019"
}));
cards.push(new Card({
	name: "Zed 1.0",
	type: ice,
	faction: hb,
	influence: 2,
	set: setNames.cnc,
	attributes: "Sentry Bioroid AP brainDamage",
	nriKey: "03020"
}));
cards.push(new Card({
	name: "Awakening Center",
	type: upgrade,
	faction: hb,
	influence: 1,
	set: setNames.cnc,
	attributes: "costReduction",
	nriKey: "03021"
}));
cards.push(new Card({
	name: "Tyr's Hand",
	type: upgrade,
	faction: hb,
	influence: 1,
	set: setNames.cnc,
	attributes: "Hostile iceBoosting",
	nriKey: "03022"
}));
cards.push(new Card({
	name: "Gila Hands Arcology",
	type: agenda,
	faction: neut,
	agendaPoints: 1,
	set: setNames.cnc,
	attributes: "Expansion credits",
	nriKey: "03023"
}));
cards.push(new Card({
	name: "Levy University",
	type: asset,
	faction: neut,
	influence: 0,
	set: setNames.cnc,
	attributes: "Ritzy search",
	nriKey: "03024"
}));
cards.push(new Card({
	name: "Server Diagnostics",
	type: asset,
	faction: neut,
	influence: 0,
	set: setNames.cnc,
	attributes: "credits",
	nriKey: "03025"
}));
cards.push(new Card({
	name: "Bastion",
	type: ice,
	faction: neut,
	influence: 0,
	set: setNames.cnc,
	attributes: "Barrier endRun",
	nriKey: "03026"
}));
cards.push(new Card({
	name: "Datapike",
	type: ice,
	faction: neut,
	influence: 0,
	set: setNames.cnc,
	attributes: "CodeGate endRun creditDisruption",
	nriKey: "03027"
}));
cards.push(new Card({
	name: "Rielle 'Kit' Peddler",
	type: identity,
	faction: shap,
	influenceAvailable: 10,
	set: setNames.cnc,
	attributes: "Cyborg iceDisruption",
	nriKey: "03028"
}));
cards.push(new Card({
	name: "The Professor",
	type: identity,
	faction: shap,
	influenceAvailable: 1,
	set: setNames.cnc,
	attributes: "Natural",
	nriKey: "03029",
	customInfluenceCalculation: function (cards) {
		var total = 0, card, cardName, count;
		for (cardName in cards) {
			if (!cards.hasOwnProperty(cardName)) { continue; }

			card = getCardByName(cardName);

			if (card.faction === shap) { continue; }

			count = cards[cardName];

			if (card.type === program && count > 0) {
				count--;
			}

			total += card.influence * count;
		}

		return total;
	}
}));
cards.push(new Card({
	name: "Exile",
	type: identity,
	faction: shap,
	set: setNames.cnc,
	attributes: "Natural cards link",
	nriKey: "03030"
}));
cards.push(new Card({
	name: "Escher",
	type: event,
	faction: shap,
	influence: 5,
	set: setNames.cnc,
	attributes: "Run iceDisruption",
	nriKey: "03031"
}));
cards.push(new Card({
	name: "Exploratory Romp",
	type: event,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "Run advancementCounters",
	nriKey: "03032"
}));
cards.push(new Card({
	name: "Freelance Coding Contract",
	type: event,
	faction: shap,
	influence: 1,
	set: setNames.cnc,
	attributes: "Job credits",
	nriKey: "03033"
}));
cards.push(new Card({
	name: "Scavenge",
	type: event,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "recursion costReduction",
	nriKey: "03034"
}));
cards.push(new Card({
	name: "Levy AR Lab Access",
	type: event,
	faction: shap,
	influence: 3,
	set: setNames.cnc,
	attributes: "cards recursion",
	nriKey: "03035"
}));
cards.push(new Card({
	name: "Monolith",
	type: hardware,
	faction: shap,
	influence: 3,
	set: setNames.cnc,
	attributes: "Console memory costReduction",
	nriKey: "03036"
}));
cards.push(new Card({
	name: "Feedback Filter",
	type: hardware,
	faction: shap,
	influence: 1,
	set: setNames.cnc,
	attributes: "Gear netDamage brainDamage",
	nriKey: "03037"
}));
cards.push(new Card({
	name: "Clone Chip",
	type: hardware,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "Chip recursion",
	nriKey: "03038"
}));
cards.push(new Card({
	name: "Omni-Drive",
	type: hardware,
	faction: shap,
	influence: 3,
	set: setNames.cnc,
	attributes: "Gear memory recurringCredits",
	nriKey: "03039"
}));
cards.push(new Card({
	name: "Atman",
	type: program,
	faction: shap,
	influence: 3,
	set: setNames.cnc,
	attributes: "Icebreaker AI",
	nriKey: "03040"
}));
cards.push(new Card({
	name: "Cloak",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "Stealth recurringCredits",
	nriKey: "03041"
}));
cards.push(new Card({
	name: "Dagger",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "Icebreaker Killer stealthBonus",
	nriKey: "03042"
}));
cards.push(new Card({
	name: "Chakana",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "Virus advancementCounters",
	nriKey: "03043"
}));
cards.push(new Card({
	name: "Cyber-Cypher",
	type: program,
	faction: shap,
	influence: 3,
	set: setNames.cnc,
	attributes: "Icebreaker Decoder",
	nriKey: "03044"
}));
cards.push(new Card({
	name: "Paricia",
	type: program,
	faction: shap,
	influence: 1,
	set: setNames.cnc,
	attributes: "recurringCredits trash",
	nriKey: "03045"
}));
cards.push(new Card({
	name: "Self-Modifying Code",
	type: program,
	faction: shap,
	influence: 3,
	set: setNames.cnc,
	attributes: "search",
	nriKey: "03046"
}));
cards.push(new Card({
	name: "Sahasrara",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "recurringCredits",
	nriKey: "03047"
}));
cards.push(new Card({
	name: "Inti",
	type: program,
	faction: shap,
	influence: 1,
	set: setNames.cnc,
	attributes: "Icebreaker Fracter",
	nriKey: "03048"
}));
cards.push(new Card({
	name: "Professional Contacts",
	type: resource,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "Connection credits cards",
	nriKey: "03049"
}));
cards.push(new Card({
	name: "Borrowed Satellite",
	type: resource,
	faction: shap,
	influence: 2,
	set: setNames.cnc,
	attributes: "Link link handSize",
	nriKey: "03050"
}));
cards.push(new Card({
	name: "Ice Analyzer",
	type: resource,
	faction: shap,
	influence: 1,
	set: setNames.cnc,
	attributes: "Virtual credits",
	nriKey: "03051"
}));
cards.push(new Card({
	name: "Dirty Laundry",
	type: event,
	faction: neut,
	influence: 0,
	set: setNames.cnc,
	attributes: "Run credits",
	nriKey: "03052"
}));
cards.push(new Card({
	name: "Daily Casts",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.cnc,
	attributes: "credits",
	nriKey: "03053"
}));
cards.push(new Card({
	name: "The Source",
	type: resource,
	faction: neut,
	influence: 2,
	set: setNames.cnc,
	attributes: "Connection advancementCounters unique",
	nriKey: "03055"
}));
cards.push(new Card({
	name: "Same Old Thing",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.cnc,
	attributes: "recursion",
	nriKey: "03054"
}));

// Spin 1 - Opening Moves

cards.push(new Card({
	name: "Frame Job",
	type: event,
	faction: ana,
	influence: 2,
	set: setNames.spin1,
	attributes: "Double",
	nriKey: "04001"
}));
cards.push(new Card({
	name: "Pawn",
	type: program,
	faction: ana,
	influence: 1,
	set: setNames.spin1,
	attributes: "Caïssa recursion",
	nriKey: "04002"
}));
cards.push(new Card({
	name: "Rook",
	type: program,
	faction: ana,
	influence: 2,
	set: setNames.spin1,
	attributes: "Caïssa",
	nriKey: "04003"
}));
cards.push(new Card({
	name: "Hostage",
	type: event,
	faction: crim,
	influence: 2,
	set: setNames.spin1,
	attributes: "Double search",
	nriKey: "04004"
}));
cards.push(new Card({
	name: "Gorman Drip v1",
	type: program,
	faction: crim,
	influence: 1,
	set: setNames.spin1,
	attributes: "Virus credits",
	nriKey: "04005"
}));
cards.push(new Card({
	name: "Lockpick",
	type: hardware,
	faction: shap,
	influence: 3,
	set: setNames.spin1,
	attributes: "Chip Stealth recurringCredits",
	nriKey: "04006"
}));
cards.push(new Card({
	name: "False Echo",
	type: program,
	faction: shap,
	influence: 2,
	set: setNames.spin1,
	attributes: "iceDisruption",
	nriKey: "04007"
}));
cards.push(new Card({
	name: "Motivation",
	type: resource,
	faction: shap,
	influence: 1,
	set: setNames.spin1,
	attributes: "",
	nriKey: "04008"
}));
cards.push(new Card({
	name: "John Masanori",
	type: resource,
	faction: neut,
	influence: 0,
	set: setNames.spin1,
	attributes: "Connection cards tags",
	nriKey: "04009"
}));
cards.push(new Card({
	name: "Project Ares",
	type: agenda,
	faction: hb,
	set: setNames.spin1,
	agendaPoints: 2,
	attributes: "Security badPublicity trash",
	nriKey: "04010"
}));
cards.push(new Card({
	name: "NEXT Bronze",
	type: ice,
	faction: hb,
	influence: 2,
	set: setNames.spin1,
	attributes: "Code Gate NEXT endRun",
	nriKey: "04011"
}));
cards.push(new Card({
	name: "Celebrity Gift",
	type: operation,
	faction: jin,
	influence: 3,
	set: setNames.spin1,
	attributes: "Double credits",
	nriKey: "04012"
}));
cards.push(new Card({
	name: "Himitsu-Bako",
	type: ice,
	faction: jin,
	influence: 2,
	set: setNames.spin1,
	attributes: "Barrier endRun",
	nriKey: "04013"
}));
cards.push(new Card({
	name: "Character Assassination",
	type: agenda,
	faction: nbn,
	set: setNames.spin1,
	agendaPoints: 2,
	attributes: "Security trash",
	nriKey: "04014"
}));
cards.push(new Card({
	name: "Jackson Howard",
	type: asset,
	faction: nbn,
	influence: 1,
	set: setNames.spin1,
	attributes: "Executive cards recursion",
	nriKey: "04015"
}));
cards.push(new Card({
	name: "Invasion of Privacy",
	type: operation,
	faction: nbn,
	influence: 3,
	set: setNames.spin1,
	attributes: "Double GrayOps trace handDisruption trash",
	nriKey: "04016"
}));
cards.push(new Card({
	name: "Geothermal Fracking",
	type: agenda,
	faction: wey,
	set: setNames.spin1,
	agendaPoints: 2,
	attributes: "Expansion",
	nriKey: "04017"
}));
cards.push(new Card({
	name: "Swarm",
	type: ice,
	faction: wey,
	influence: 4,
	set: setNames.spin1,
	attributes: "Sentry Destroyer Illicit badPublicity advanceable trash",
	nriKey: "04018"
}));
cards.push(new Card({
	name: "Cyberdex Trial",
	type: operation,
	faction: neut,
	influence: 0,
	set: setNames.spin1,
	attributes: "virusHelper",
	nriKey: "04019"
}));
cards.push(new Card({
	name: "Grim",
	type: ice,
	faction: neut,
	influence: 0,
	set: setNames.spin1,
	attributes: "Sentry Destroyer Illicit badPublicity trash",
	nriKey: "04020"
}));

cards = cards.sort(function (a, b) {
	return (a.name > b.name) ? 1 : -1;
});
