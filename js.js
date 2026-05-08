const spellList = {
  1: ["Absorber Elementos", "Manos Ardientes", "Catapulta", "Descarga Caóitica", "Encantar Persona", "Orbe Cromático", "Rociada de Color", "Duelo Forzado", "Disfrazarse", "Vida Falsa", "Encontrar Familiar", "Reprensión Infernal", "Maldición", "Identificar", "Armadura de Mago", "Proyectil Mágico", "Escudo","Imagen Silenciosa", "Dormir","Trampa", "Ola Atronadora","Sirviente Invisible", "Rayo de Hechizeria"],
  2: ["Alterar el Propio Aspecto", "Augurio", "Contorno borroso", "Nube de Dagas","Cryophage", "Oscuridad", "Detectar Pensamientos","Aliento de Dragón","Encontrar Trampas", "Inmovilizar Persona","Localizar Objeto","Arma Mágica","Flecha Ácida de Melf", "Paso Brumoso", "Rayo Abrasador","Hoja Sombría","Spray de Cartas"],
  3: ["Zancada de Ashardalon","Contrahechizo", "Disipar Magia","Flechas Llameantes", "Acelerar", "Hambre de Hadar", "Relámpago","Imagen Mayor","Recado","Smog"],
  4: ["Marchitar","Encantar Monstruo","Compulsión", "Confusión", "Puerta Dimensional","Perdición Elemental","Tentáculos Negros de Evard", "Invisibilidad Mayor","Sabueso Fiel de Mordenkainen","Neurotoxin", "Polimorfar","Thermophage"],
  5: ["Animar Objetos", "Cono de Frío", "Inmovilizar Monstruo", "Inmolación","Engañar","Apariencia","Fortalecer Habilidad",]
};

const archetypes = {
  anima: {
    1: ["Orbe Cromático", "Descarga Caóitica"],
    5: ["Aliento de Dragón", "Hielo inmovilizador de Escarcha"],
    10: ["Arma Elemental", "Flecha de Relámpago"],
    13: ["Perdición Elemental", "Escudo de Fuego"],
    17: ["Cono de Frío", "Inmolación"]
  },

  convergencia: {
    1: ["Ola Atronadora", "Misil Mágico"],
    5: ["Clavo Mental", "Estallar"],
    10: ["Antagonizar", "Paso Atronador"],
    13: ["Asesino Fantasmal", "Lanza Psíquica de Raulothim"],
    17: ["Geas", "Estática Sináptica"]
  },

  doublelift: {
    1: ["Don de la Presteza", "Marca del Cazador"],
    5: ["Moneda Brillante de Jim", "Lluvia de Cartas"],
    10: ["Acelerar", "Paso de Trueno"],
    13: ["Compulsión", "Libertad de Movimiento"],
    17: ["Inmovilizar Monstruo", "Golpe de Viento de Acero"]
  },

  brillo: {
    1: ["Fuego Feérico", "Proyectil Guiado"],
    5: ["Ceguera/Sordera", "Llama Continua"],
    10: ["Golpe Cegador", "Arma Elemental"],
    13: ["Resplandor Enfermo", "Esfera de Tormenta"],
    17: ["Arma Sagrada", "Inmolación"]
  },

  hogar: {
    1: ["Temblor de Tierra", "Granizo de Espinas"],
    5: ["Atadura Terrenal", "Estallar"],
    10: ["Tierra en Erupción", "Meteoritos Diminutos de Melf"],
    13: ["Piel de Piedra", "Dar Forma a la Piedra"],
    17: ["Transmutar Roca", "Muro de Piedra"]
  },

  hexawan: {
    1: ["Cuchillo de Hielo", "Disco Flotante de Tenser"],
    5: ["Calentar Metal", "Encontrar Corcel"],
    10: ["Invocar Descarga", "Sirviente Diminuto"],
    13: ["Fabricar", "Invocar Constructo"],
    17: ["Creación", "Invocar Andanada"]
  },

  kinesis: {
    1: ["Retirada Expeditiva", "Caída de Pluma"],
    5: ["Mejorar Habilidad", "Paso Brumoso"],
    10: ["Aceleración", "Lentitud"],
    13: ["Puerta Dimensional", "Libertad de Movimiento"],
    17: ["Paso Lejano", "Engañar"]
  },

  miseri: {
    1: ["Curar Heridas", "Toxina Sombría"],
    5: ["Cryophage", "Transfusión de Vitalidad"],
    10: ["Smog", "Toque Vampírico"],
    13: ["Neurotoxina", "Thermophage"],
    17: ["Nube Mortal", "Contagio"]
  },

  phalanx: {
    1: ["Armadura de Mago", "Escudo de Fe"],
    5: ["Protección contra Veneno", "Vínculo Protector"],
    10: ["Fortaleza Intelectual", "Protección contra Energía"],
    13: ["Guardia contra la Muerte", "Piel de Piedra"],
    17: ["Disipar el Bien y el Mal", "Engañar"]
  },

  slashfik: {
    1: ["Cuchillo de Hielo", "Golpe de Céfiro"],
    5: ["Nube de Dagas", "Hoja Flamígera"],
    10: ["Arma Elemental", "Aceleración"],
    13: ["Sabueso Fiel de Mordenkainen", "Golpe Aturdidor"],
    17: ["Animar Objetos", "Golpe de Viento de Acero"]
  }
};

const SAVE_KEY = "cartomancer-save-v1";

const elements = {
  level: document.getElementById("level"),
  spellLevel: document.getElementById("spellLevel"),
  spellSearch: document.getElementById("spellSearch"),
  spellSelect: document.getElementById("spellSelect"),
  archetype: document.getElementById("archetype"),
  selectedSpells: document.getElementById("selectedSpells"),
  saveStatus: document.getElementById("saveStatus"),
  appNotice: document.getElementById("appNotice"),
  deckInfo: document.getElementById("deckInfo"),
  hand: document.getElementById("hand"),
  burned: document.getElementById("burned"),
  discard: document.getElementById("discard"),
  addSpellButton: document.getElementById("addSpellButton"),
  buildDeckButton: document.getElementById("buildDeckButton"),
  drawHandButton: document.getElementById("drawHandButton"),
  drawFullHandButton: document.getElementById("drawFullHandButton"),
  shortRestButton: document.getElementById("shortRestButton"),
  longRestButton: document.getElementById("longRestButton"),
  saveGameButton: document.getElementById("saveGameButton"),
  loadGameButton: document.getElementById("loadGameButton"),
  deleteSaveButton: document.getElementById("deleteSaveButton")
};

const state = {
  selectedSpells: [],
  archetypeSpells: [],
  deck: [],
  hand: [],
  burned: [],
  discard: [],
  handSize: 3,
  maxDeck: 4
};

let deleteConfirmUntil = 0;
let burnInProgress = false;

const CARD_BURN_ANIMATION_MS = 520;
const SELECTED_SPELL_REMOVE_MS = 240;
const pendingAnimations = {
  handEnterFrom: null,
  handEnterClass: "card-draw-enter",
  burnedEnterFrom: null,
  discardEnterFrom: null
};

const previousCounts = {
  deck: null,
  hand: null,
  burned: null,
  discard: null
};

function getLevel() {
  return Number.parseInt(elements.level.value, 10) || 1;
}

function getStats(level) {
  const table = {
    1: { hand: 3, maxDeck: 4 },
    2: { hand: 3, maxDeck: 6 },
    3: { hand: 3, maxDeck: 8 },
    4: { hand: 3, maxDeck: 10 },
    5: { hand: 4, maxDeck: 12 },
    6: { hand: 4, maxDeck: 14 },
    7: { hand: 4, maxDeck: 16 },
    8: { hand: 4, maxDeck: 18 },
    9: { hand: 5, maxDeck: 20 },
    10: { hand: 5, maxDeck: 22 },
    11: { hand: 5, maxDeck: 24 },
    12: { hand: 5, maxDeck: 26 },
    13: { hand: 6, maxDeck: 28 },
    14: { hand: 6, maxDeck: 30 },
    15: { hand: 6, maxDeck: 32 },
    16: { hand: 6, maxDeck: 34 },
    17: { hand: 7, maxDeck: 36 },
    18: { hand: 7, maxDeck: 38 },
    19: { hand: 7, maxDeck: 40 },
    20: { hand: 7, maxDeck: 42 }
  };

  return table[level] || table[1];
}

function updateStatsFromLevel() {
  const stats = getStats(getLevel());
  state.handSize = stats.hand;
  state.maxDeck = stats.maxDeck;
}

function getArchetypeSpells() {
  const level = getLevel();
  const data = archetypes[elements.archetype.value] || {};
  const spells = [];

  Object.entries(data).forEach(([requiredLevel, archetypeSpells]) => {
    if (level >= Number(requiredLevel)) {
      spells.push(...archetypeSpells);
    }
  });

  return spells;
}

function normalizeSearchText(text) {
  return text
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getVisibleSpells() {
  const level = elements.spellLevel.value;
  const options = spellList[level] || spellList[1];
  const search = normalizeSearchText(elements.spellSearch.value.trim());

  if (!search) {
    return options;
  }

  return options.filter(spell => normalizeSearchText(spell).includes(search));
}

function updateSpellSelect() {
  const options = getVisibleSpells();
  const fragment = document.createDocumentFragment();

  options.forEach(spell => {
    const option = document.createElement("option");
    option.value = spell;
    option.textContent = spell;
    fragment.appendChild(option);
  });

  elements.spellSelect.replaceChildren(fragment);
  updateActionButtons();
}

function renderSelectedSpells() {
  const fragment = document.createDocumentFragment();
  const counter = document.createElement("strong");
  counter.textContent = `${state.selectedSpells.length} / ${state.maxDeck}`;

  fragment.appendChild(counter);

  state.selectedSpells.forEach((spell, index) => {
    const line = document.createElement("div");
    const text = document.createElement("span");
    const button = document.createElement("button");

    line.className = "selected-spell";
    text.textContent = `🃏 ${spell}`;
    button.type = "button";
    button.className = "remove-spell";
    button.textContent = "×";
    button.title = `Quitar ${spell}`;
    button.setAttribute("aria-label", `Quitar ${spell}`);
    button.addEventListener("click", () => removeSelectedSpell(index, line));

    line.appendChild(text);
    line.appendChild(button);
    fragment.appendChild(line);
  });

  elements.selectedSpells.replaceChildren(fragment);
  updateActionButtons();
}

function shouldAnimateFrom(index, fromIndex) {
  return Number.isInteger(fromIndex) && index >= fromIndex;
}

function clearPendingAnimations() {
  pendingAnimations.handEnterFrom = null;
  pendingAnimations.handEnterClass = "card-draw-enter";
  pendingAnimations.burnedEnterFrom = null;
  pendingAnimations.discardEnterFrom = null;
}

function createCard(text, className = "card", animationClass = "") {
  const card = document.createElement("div");
  card.className = className;

  if (animationClass) {
    card.classList.add(...animationClass.split(" "));
  }

  card.textContent = text;
  return card;
}

function renderHand() {
  const fragment = document.createDocumentFragment();

  state.hand.forEach((spell, index) => {
    const card = createCard(
      spell,
      "card",
      shouldAnimateFrom(index, pendingAnimations.handEnterFrom) ? pendingAnimations.handEnterClass : ""
    );
    const breakLine = document.createElement("br");
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = "Lanzar 🔥";
    button.addEventListener("click", () => burnCard(index, card));

    card.appendChild(breakLine);
    card.appendChild(button);
    fragment.appendChild(card);
  });

  elements.hand.replaceChildren(fragment);
}

function renderCardList(container, cards, className = "card", enterFrom = null, enterClass = "card-enter") {
  const fragment = document.createDocumentFragment();

  cards.forEach((spell, index) => {
    fragment.appendChild(createCard(spell, className, shouldAnimateFrom(index, enterFrom) ? enterClass : ""));
  });

  container.replaceChildren(fragment);
}

function renderDeckInfo() {
  const counts = [
    { key: "deck", text: `🎴 Deck: ${state.deck.length} cartas`, value: state.deck.length },
    { key: "hand", text: `🖐 Mano: ${state.hand.length} cartas`, value: state.hand.length },
    { key: "burned", text: `🔥 Quemadas: ${state.burned.length} cartas`, value: state.burned.length },
    { key: "discard", text: `🗑 Descartadas: ${state.discard.length} cartas`, value: state.discard.length }
  ];

  const fragment = document.createDocumentFragment();

  counts.forEach(({ key, text, value }) => {
    const line = document.createElement("div");
    line.textContent = text;

    if (previousCounts[key] !== null && previousCounts[key] !== value) {
      line.classList.add("counter-pop");
    }

    previousCounts[key] = value;
    fragment.appendChild(line);
  });

  elements.deckInfo.replaceChildren(fragment);
}

function render() {
  renderHand();
  renderCardList(elements.burned, state.burned, "card", pendingAnimations.burnedEnterFrom, "card-burned-enter");
  renderCardList(elements.discard, state.discard, "card discard-card", pendingAnimations.discardEnterFrom, "card-discard-enter");
  renderDeckInfo();
  updateActionButtons();
  clearPendingAnimations();
}

function renderAll() {
  renderSelectedSpells();
  render();
}

function normalizeArray(value) {
  return Array.isArray(value) ? value : [];
}

function formatSaveTime(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleString("es-UY", {
    dateStyle: "short",
    timeStyle: "short"
  });
}

function setSaveStatus(message) {
  elements.saveStatus.textContent = message;
}

function showNotice(message, type = "info") {
  elements.appNotice.textContent = message;
  elements.appNotice.className = `notice ${type}`;
  elements.appNotice.classList.remove("notice-pop");
  void elements.appNotice.offsetWidth;
  elements.appNotice.classList.add("notice-pop");
}

function hasSavedGame() {
  try {
    return Boolean(localStorage.getItem(SAVE_KEY));
  } catch (error) {
    console.error(error);
    return false;
  }
}

function getActionBlockers() {
  const archetypeSpells = getArchetypeSpells();
  const totalCards = state.deck.length + state.hand.length + state.burned.length + state.discard.length;
  const savedGameExists = hasSavedGame();
  const animationBlocker = burnInProgress ? "Espera a que termine la animación de la carta." : "";

  return {
    addSpell: animationBlocker || (!elements.spellSelect.value
      ? "No hay conjuros que coincidan con la búsqueda."
      : state.selectedSpells.length >= state.maxDeck
        ? `Ya llegaste al límite de ${state.maxDeck} conjuros para este nivel.`
        : ""),
    buildDeck: animationBlocker || (state.selectedSpells.length > state.maxDeck
      ? `Tienes demasiados conjuros. El máximo actual es ${state.maxDeck}.`
      : state.selectedSpells.length === 0 && archetypeSpells.length === 0
        ? "Añade al menos un conjuro o elige un arquetipo con conjuros disponibles."
        : ""),
    drawHand: animationBlocker || (state.hand.length >= state.handSize
      ? `La mano ya está llena (${state.handSize} cartas).`
      : state.deck.length === 0
        ? "No hay cartas en el mazo para robar."
        : ""),
    drawFullHand: animationBlocker || (state.hand.length >= state.handSize
      ? `La mano ya está llena (${state.handSize} cartas).`
      : state.deck.length === 0
        ? "No hay cartas en el mazo para completar la mano."
        : ""),
    shortRest: animationBlocker || (state.deck.length === 0
      ? "No hay cartas en el mazo para robar después del descanso corto."
      : ""),
    longRest: animationBlocker || (totalCards === 0
      ? "No hay cartas para recuperar con un descanso largo."
      : ""),
    loadGame: animationBlocker || (savedGameExists
      ? ""
      : "No hay guardado todavía."),
    deleteSave: animationBlocker || (savedGameExists
      ? ""
      : "No hay guardado para borrar.")
  };
}

function setActionButtonState(button, blockedReason) {
  const isBlocked = Boolean(blockedReason);

  button.classList.toggle("is-disabled", isBlocked);
  button.setAttribute("aria-disabled", String(isBlocked));
  button.title = blockedReason;
}

function getActionButton(action) {
  const buttons = {
    addSpell: elements.addSpellButton,
    buildDeck: elements.buildDeckButton,
    drawHand: elements.drawHandButton,
    drawFullHand: elements.drawFullHandButton,
    shortRest: elements.shortRestButton,
    longRest: elements.longRestButton,
    loadGame: elements.loadGameButton,
    deleteSave: elements.deleteSaveButton
  };

  return buttons[action] || null;
}

function shakeButton(button) {
  if (!button) {
    return;
  }

  button.classList.remove("button-shake");
  void button.offsetWidth;
  button.classList.add("button-shake");
}

function updateActionButtons() {
  const blockers = getActionBlockers();

  setActionButtonState(elements.addSpellButton, blockers.addSpell);
  setActionButtonState(elements.buildDeckButton, blockers.buildDeck);
  setActionButtonState(elements.drawHandButton, blockers.drawHand);
  setActionButtonState(elements.drawFullHandButton, blockers.drawFullHand);
  setActionButtonState(elements.shortRestButton, blockers.shortRest);
  setActionButtonState(elements.longRestButton, blockers.longRest);
  setActionButtonState(elements.loadGameButton, blockers.loadGame);
  setActionButtonState(elements.deleteSaveButton, blockers.deleteSave);

  elements.drawHandButton.classList.toggle("is-suggested", !blockers.drawHand);
  elements.drawFullHandButton.classList.toggle("is-suggested", !blockers.drawFullHand);
}

function canUseAction(action) {
  const blockedReason = getActionBlockers()[action];

  if (blockedReason) {
    showNotice(blockedReason, "warning");
    shakeButton(getActionButton(action));
    updateActionButtons();
    return false;
  }

  return true;
}

function getSaveData() {
  return {
    version: 3,
    savedAt: new Date().toISOString(),
    level: elements.level.value,
    spellLevel: elements.spellLevel.value,
    spellSearch: elements.spellSearch.value,
    selectedSpell: elements.spellSelect.value,
    archetype: elements.archetype.value,
    selectedSpells: [...state.selectedSpells],
    archetypeSpells: [...state.archetypeSpells],
    deck: [...state.deck],
    hand: [...state.hand],
    burned: [...state.burned],
    discard: [...state.discard],
    handSize: state.handSize,
    maxDeck: state.maxDeck
  };
}

function saveGame(showMessage = true) {
  updateStatsFromLevel();

  const data = getSaveData();

  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error(error);
    setSaveStatus("⚠️ No se pudo guardar");
    showNotice("No se pudo guardar la partida.", "error");

    return false;
  }

  if (showMessage) {
    setSaveStatus(`💾 Guardado ${formatSaveTime(data.savedAt)}`);
    showNotice("Partida guardada.", "success");
  }

  updateActionButtons();
  return true;
}

function autoSaveGame() {
  if (saveGame(false)) {
    setSaveStatus("💾 Autoguardado");
  }
}

function loadGame(showMessage = true) {
  let rawSave = null;

  try {
    rawSave = localStorage.getItem(SAVE_KEY);
  } catch (error) {
    console.error(error);
    setSaveStatus("⚠️ El navegador bloqueó el guardado");

    if (showMessage) {
      showNotice("El navegador bloqueó el acceso al guardado.", "error");
    }

    return false;
  }

  if (!rawSave) {
    if (showMessage) {
      showNotice("No hay guardado todavía.", "warning");
    }

    setSaveStatus("Sin guardado");
    updateActionButtons();
    return false;
  }

  try {
    const data = JSON.parse(rawSave);
    const savedSpellLevel = spellList[data.spellLevel] ? data.spellLevel : "1";
    const savedArchetype = archetypes[data.archetype] ? data.archetype : "anima";

    elements.level.value = data.level || "1";
    elements.spellLevel.value = savedSpellLevel;
    elements.spellSearch.value = data.spellSearch || "";
    elements.archetype.value = savedArchetype;

    updateSpellSelect();

    if (data.selectedSpell && getVisibleSpells().includes(data.selectedSpell)) {
      elements.spellSelect.value = data.selectedSpell;
    }

    state.selectedSpells = normalizeArray(data.selectedSpells);
    state.archetypeSpells = normalizeArray(data.archetypeSpells);
    state.deck = normalizeArray(data.deck);
    state.hand = normalizeArray(data.hand);
    state.burned = normalizeArray(data.burned);
    state.discard = normalizeArray(data.discard);

    updateStatsFromLevel();
    renderAll();
    setSaveStatus(`📂 Cargado ${formatSaveTime(data.savedAt)}`);

    if (showMessage) {
      showNotice("Partida cargada.", "success");
    }

    return true;
  } catch (error) {
    console.error(error);
    setSaveStatus("⚠️ No se pudo cargar");

    if (showMessage) {
      showNotice("El guardado está dañado o no se pudo leer.", "error");
    }

    return false;
  }
}

function deleteSave() {
  if (!canUseAction("deleteSave")) {
    return;
  }

  const now = Date.now();

  if (now > deleteConfirmUntil) {
    deleteConfirmUntil = now + 5000;
    showNotice("Haz clic otra vez en Borrar guardado para confirmarlo.", "warning");
    return;
  }

  try {
    localStorage.removeItem(SAVE_KEY);
    setSaveStatus("🗑 Guardado borrado");
    showNotice("Guardado borrado.", "success");
    deleteConfirmUntil = 0;
    updateActionButtons();
  } catch (error) {
    console.error(error);
    setSaveStatus("⚠️ No se pudo borrar");
    showNotice("No se pudo borrar el guardado.", "error");
  }
}

function addSpell() {
  const spell = elements.spellSelect.value;

  updateStatsFromLevel();

  if (!canUseAction("addSpell")) {
    return;
  }

  state.selectedSpells.push(spell);
  renderSelectedSpells();
  showNotice(`Añadiste ${spell}.`, "success");
  autoSaveGame();
}

function removeSelectedSpell(index, itemElement = null) {
  const spell = state.selectedSpells[index];

  if (!spell) {
    return;
  }

  if (itemElement) {
    itemElement.classList.add("selected-spell-remove");
    itemElement.querySelectorAll("button").forEach(button => {
      button.disabled = true;
    });
  }

  window.setTimeout(() => finishRemoveSelectedSpell(index, spell), SELECTED_SPELL_REMOVE_MS);
}

function finishRemoveSelectedSpell(index, expectedSpell) {
  const currentIndex = state.selectedSpells[index] === expectedSpell
    ? index
    : state.selectedSpells.indexOf(expectedSpell);

  if (currentIndex === -1) {
    return;
  }

  const [removedSpell] = state.selectedSpells.splice(currentIndex, 1);

  renderSelectedSpells();
  showNotice(`Quitaste ${removedSpell}.`, "info");
  autoSaveGame();
}

function buildDeck() {
  updateStatsFromLevel();
  state.archetypeSpells = getArchetypeSpells();

  const chosenSpells = [...state.selectedSpells];

  if (!canUseAction("buildDeck")) {
    return;
  }

  state.deck = [...chosenSpells, ...state.archetypeSpells];
  state.hand = [];
  state.burned = [];
  state.discard = [];
  state.selectedSpells = [];

  const deckSize = state.deck.length;
  drawCard(false);
  pendingAnimations.handEnterFrom = 0;
  pendingAnimations.handEnterClass = "card-draw-enter";
  renderAll();
  autoSaveGame();

  showNotice(`Mazo creado. Elegidas: ${chosenSpells.length}/${state.maxDeck}. Extras: ${state.archetypeSpells.length}. Total: ${deckSize}.`, "success");
}

function shuffle(cards) {
  const shuffled = [...cards];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function drawCard(showAlerts = true) {
  if (state.hand.length >= state.handSize) {
    if (showAlerts) {
      showNotice(`La mano ya está llena (${state.handSize} cartas).`, "warning");
    }

    return false;
  }

  if (state.deck.length === 0) {
    if (showAlerts) {
      showNotice("No hay cartas en el mazo para robar.", "warning");
    }

    return false;
  }

  state.hand.push(state.deck.pop());
  return true;
}

function drawHand() {
  if (!canUseAction("drawHand")) {
    return;
  }

  const enterFrom = state.hand.length;
  drawCard(false);
  pendingAnimations.handEnterFrom = enterFrom;
  pendingAnimations.handEnterClass = "card-draw-enter";
  showNotice("Robaste una carta.", "info");
  render();
  autoSaveGame();
}

function drawFullHand() {
  if (!canUseAction("drawFullHand")) {
    return;
  }

  let drawnCards = 0;
  const enterFrom = state.hand.length;

  while (state.hand.length < state.handSize && state.deck.length > 0) {
    drawCard(false);
    drawnCards += 1;
  }

  pendingAnimations.handEnterFrom = enterFrom;
  pendingAnimations.handEnterClass = "card-draw-enter";
  showNotice(`Robaste ${drawnCards} carta${drawnCards === 1 ? "" : "s"}.`, "info");
  render();
  autoSaveGame();
}

function burnCard(index, cardElement = null) {
  const spell = state.hand[index];

  if (!spell || burnInProgress) {
    return;
  }

  burnInProgress = true;
  updateActionButtons();

  if (cardElement) {
    cardElement.classList.add("card-burn-out");
    cardElement.querySelectorAll("button").forEach(button => {
      button.disabled = true;
    });
  }

  window.setTimeout(() => finishBurnCard(index, spell), CARD_BURN_ANIMATION_MS);
}

function finishBurnCard(index, expectedSpell) {
  const currentIndex = state.hand[index] === expectedSpell
    ? index
    : state.hand.indexOf(expectedSpell);

  if (currentIndex === -1) {
    burnInProgress = false;
    updateActionButtons();
    return;
  }

  const [spell] = state.hand.splice(currentIndex, 1);
  const burnedEnterFrom = state.burned.length;

  state.burned.push(spell);
  pendingAnimations.burnedEnterFrom = burnedEnterFrom;
  burnInProgress = false;
  render();
  autoSaveGame();
}

function shortRest() {
  if (!canUseAction("shortRest")) {
    return;
  }

  const discardEnterFrom = state.discard.length;
  const discardedCards = state.hand.length;

  state.discard.push(...state.hand);
  state.hand = [];
  drawCard(false);

  if (discardedCards > 0) {
    pendingAnimations.discardEnterFrom = discardEnterFrom;
  }

  pendingAnimations.handEnterFrom = 0;
  pendingAnimations.handEnterClass = "card-draw-enter";
  showNotice("Descanso corto realizado.", "info");
  render();
  autoSaveGame();
}

function longRest() {
  if (!canUseAction("longRest")) {
    return;
  }

  state.deck = shuffle([...state.deck, ...state.hand, ...state.burned, ...state.discard]);
  state.hand = [];
  state.burned = [];
  state.discard = [];
  drawCard(false);
  pendingAnimations.handEnterFrom = 0;
  pendingAnimations.handEnterClass = "card-draw-enter";
  showNotice("Descanso largo realizado.", "info");
  render();
  autoSaveGame();
}

function handleLevelChange() {
  updateStatsFromLevel();
  renderSelectedSpells();
  autoSaveGame();
}

function handleSpellLevelChange() {
  updateSpellSelect();
  autoSaveGame();
}

function handleSpellSearch() {
  updateSpellSelect();
  autoSaveGame();
}

function handleArchetypeChange() {
  updateActionButtons();
  autoSaveGame();
}

function bindEvents() {
  elements.spellLevel.addEventListener("change", handleSpellLevelChange);
  elements.spellSearch.addEventListener("input", handleSpellSearch);
  elements.spellSelect.addEventListener("change", autoSaveGame);
  elements.level.addEventListener("input", handleLevelChange);
  elements.archetype.addEventListener("change", handleArchetypeChange);
  elements.addSpellButton.addEventListener("click", addSpell);
  elements.buildDeckButton.addEventListener("click", buildDeck);
  elements.drawHandButton.addEventListener("click", drawHand);
  elements.drawFullHandButton.addEventListener("click", drawFullHand);
  elements.shortRestButton.addEventListener("click", shortRest);
  elements.longRestButton.addEventListener("click", longRest);
  elements.saveGameButton.addEventListener("click", () => saveGame());
  elements.loadGameButton.addEventListener("click", () => loadGame());
  elements.deleteSaveButton.addEventListener("click", deleteSave);
}

function bootGame() {
  bindEvents();
  updateStatsFromLevel();
  updateSpellSelect();

  if (!loadGame(false)) {
    renderAll();
  }
}

bootGame();
