const attributes = [
  ["forca", "Força", "FOR"],
  ["destreza", "Destreza", "DES"],
  ["constituicao", "Constituição", "CON"],
  ["inteligencia", "Inteligência", "INT"],
  ["sabedoria", "Sabedoria", "SAB"],
  ["presenca", "Presença", "PRE"],
];

const origins = {
  inato: { label: "Inato", text: "+2 em um atributo, +1 em outro, talento natural e marca registrada." },
  herdado: { label: "Herdado", text: "Linhagem de clã com técnica herdada, treinamentos e herança própria." },
  derivado: { label: "Derivado", text: "Energia antinatural, reserva emergencial e crescimento inesperado." },
  restringido: { label: "Restringido", text: "Sem energia amaldiçoada, físico absurdo e estamina no lugar de PE." },
  feto: { label: "Feto Amaldiçoado Híbrido", text: "Corpo híbrido, vigor maldito e características de anatomia." },
  semTecnica: { label: "Sem Técnica", text: "Sem técnica inicial, compensando com estudo, perícias e empenho." },
  corpoMutante: { label: "Corpo Amaldiçoado Mutante", text: "Forma sintética consciente, múltiplos núcleos e mutação abrupta." },
};

const specs = {
  lutador: { label: "Lutador", hpBase: 12, hpFixed: 6, die: "1d10", energy: 4, key: ["forca", "destreza"], text: "Foco físico, armas, mobilidade e dano consistente." },
  combate: { label: "Especialista em Combate", hpBase: 12, hpFixed: 6, die: "1d10", energy: 4, key: ["forca", "destreza", "sabedoria"], text: "Versatilidade marcial, repertório e domínio tático." },
  tecnica: { label: "Especialista em Técnica", hpBase: 10, hpFixed: 5, die: "1d8", energy: 6, key: ["inteligencia", "sabedoria"], addsKeyMod: true, text: "Domínio máximo de técnica e fundamentos amaldiçoados." },
  controlador: { label: "Controlador", hpBase: 10, hpFixed: 5, die: "1d8", energy: 5, key: ["presenca", "sabedoria"], addsKeyMod: true, text: "Shikigamis, marionetes, campo e invocações." },
  suporte: { label: "Suporte", hpBase: 10, hpFixed: 5, die: "1d8", energy: 5, key: ["presenca", "sabedoria"], addsKeyMod: true, text: "Apoio, cura, reação tática e sustentação do grupo." },
  restringido: { label: "Restringido", hpBase: 16, hpFixed: 7, die: "1d12", energy: 0, key: attributes.map(([id]) => id), text: "Sem PE, com Estamina, estilo marcial e dádivas do céu." },
};

const xpTable = [0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000, 78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000];
const pointBuyCost = { 8: -2, 9: -1, 10: 0, 11: 2, 12: 3, 13: 4, 14: 5, 15: 7 };

const state = {
  attrs: { forca: 15, destreza: 14, constituicao: 13, inteligencia: 12, sabedoria: 10, presenca: 8 },
};

const actions = [
  ["Agarrar", "Atletismo vs Atletismo/Acrobacia para aplicar Agarrado."],
  ["Apoiar", "Vantagem no próximo teste aliado ou no primeiro ataque contra alvo adjacente."],
  ["Atacar", "Ataque com arma, desarmado ou técnica aplicável."],
  ["Fintar", "Ação bônus: Enganação vs Reflexos para deixar Desprevenido."],
  ["Mirar", "Ação bônus: vantagem no próximo ataque à distância."],
  ["Investida", "Ação completa: move 2× deslocamento, +2 no ataque e -2 DEF."],
];

const skills = [
  ["Acrobacia+", "destreza"],
  ["Adestramento+", "presenca"],
  ["Artes*", "presenca"],
  ["Atletismo", "forca"],
  ["Atualidades", "inteligencia"],
  ["Ciências*", "inteligencia"],
  ["Crime+", "destreza"],
  ["Diplomacia", "presenca"],
  ["Enganação", "presenca"],
  ["Fortitude", "constituicao"],
  ["Furtividade+", "destreza"],
  ["Iniciativa", "destreza"],
  ["Intimidação", "presenca"],
  ["Intuição", "sabedoria"],
  ["Investigação", "inteligencia"],
  ["Luta", "forca"],
  ["Medicina", "sabedoria"],
  ["Ocultismo*", "inteligencia", true],
  ["Percepção", "sabedoria"],
  ["Pilotagem+", "destreza"],
  ["Pontaria", "destreza"],
  ["Profissão*", "inteligencia"],
  ["Reflexos", "destreza"],
  ["Religião*", "sabedoria", true],
  ["Sobrevivência", "sabedoria"],
  ["Tática*", "inteligencia"],
  ["Tecnologia*", "inteligencia"],
  ["Vontade", "sabedoria", true],
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const mod = (value) => Math.floor((Number(value) - 10) / 2);
const signed = (value) => (value >= 0 ? `+${value}` : `${value}`);
const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || min));

function trainingBonus(level) {
  if (level >= 17) return 6;
  if (level >= 13) return 5;
  if (level >= 9) return 4;
  if (level >= 5) return 3;
  return 2;
}

function grade(level) {
  if (level >= 19) return "Grau especial";
  if (level >= 14) return "1° grau";
  if (level >= 8) return "2° grau";
  if (level >= 5) return "3° grau";
  return "4° grau";
}

function maxAttrFor(attr) {
  return $("#origin").value === "restringido" && ["forca", "destreza", "constituicao"].includes(attr) ? 30 : 20;
}

function calculate() {
  const level = clamp($("#level").value, 1, 20);
  const spec = specs[$("#specialization").value];
  const con = mod(state.attrs.constituicao);
  const des = mod(state.attrs.destreza);
  const sab = mod(state.attrs.sabedoria);
  const key = mod(state.attrs[$("#techAttr").value] ?? 10);
  const halfLevel = Math.floor(level / 2);
  const bt = trainingBonus(level);
  const hp = Math.max(1, spec.hpBase + con + (level - 1) * Math.max(1, spec.hpFixed + con));
  const restricted = $("#specialization").value === "restringido";
  const energy = restricted ? 4 * level : Math.max(0, spec.energy * level + (spec.addsKeyMod ? key : 0));
  const defenseBonus = restricted ? Math.min(level, Math.max(mod(state.attrs.forca), con, 0)) : 0;
  const defense = 10 + des + halfLevel + defenseBonus;
  const attention = 10 + sab + halfLevel + ($("#perceptionTrained").value === "yes" ? bt : 0);
  const spent = Object.values(state.attrs).reduce((sum, value) => {
    const normalized = clamp(value, 8, 15);
    return sum + (pointBuyCost[normalized] ?? 99);
  }, 0);

  return { level, spec, con, des, sab, key, halfLevel, bt, hp, energy, restricted, defense, initiative: des, attention, techDc: 10 + halfLevel + key + bt, spent };
}

function validate(calc) {
  const warnings = [];
  const origin = $("#origin").value;
  const specialization = $("#specialization").value;

  for (const [attr, label] of attributes) {
    if (state.attrs[attr] < 0 || state.attrs[attr] > maxAttrFor(attr)) warnings.push(`${label} está fora do limite permitido.`);
  }

  if (origin === "restringido" && specialization !== "restringido") warnings.push("Origem Restringido exige especialização Restringido.");
  if (specialization === "restringido" && origin !== "restringido") warnings.push("Especialização Restringido só combina com origem Restringido.");
  if (origin === "semTecnica" && specialization === "tecnica") warnings.push("Sem Técnica não pode ser Especialista em Técnica.");
  if (origin === "semTecnica" && calc.level < 4) warnings.push("Sem Técnica antes do nível 4 não deve possuir técnica.");
  if (origin === "corpoMutante") warnings.push("Corpo Amaldiçoado Mutante não pode realizar multiclasse.");
  if (calc.spent > 17) warnings.push(`Point Buy excedido em ${calc.spent - 17} ponto(s).`);
  return warnings;
}

function characterJson(calc, warnings) {
  const mods = Object.fromEntries(attributes.map(([id]) => [id, mod(state.attrs[id])]));
  return {
    personagem: {
      nome: $("#name").value.trim() || "Investigador Sem Nome",
      nivel: calc.level,
      xp: Number($("#xp").value) || 0,
      origem: origins[$("#origin").value].label,
      especializacao: calc.spec.label,
      multiclasse: null,
      grau: grade(calc.level),
      atributos: { ...state.attrs },
      modificadores: mods,
      status: {
        vida_max: calc.hp,
        vida_atual: calc.hp,
        energia_max: calc.restricted ? 0 : calc.energy,
        energia_atual: calc.restricted ? 0 : calc.energy,
        estamina_max: calc.restricted ? calc.energy : 0,
        estamina_atual: calc.restricted ? calc.energy : 0,
        defesa: calc.defense,
        iniciativa: calc.initiative,
        deslocamento: $("#origin").value === "restringido" ? 12 : 9,
        atencao: calc.attention,
        integridade: calc.hp,
      },
      bonus_treinamento: calc.bt,
      dados_de_vida: Array.from({ length: calc.level }, () => calc.spec.die),
      tecnica: $("#origin").value === "semTecnica" && calc.level < 4 ? null : { atributo: $("#techAttr").value, cd: calc.techDc },
      alertas_de_validacao: warnings,
    },
  };
}

function resetCharacter() {
  $("#name").value = "Investigador Sem Nome";
  $("#level").value = 1;
  $("#xp").value = 0;
  $("#origin").value = "inato";
  $("#specialization").value = "lutador";
  $("#techAttr").value = "destreza";
  $("#perceptionTrained").value = "no";
  Object.assign(state.attrs, { forca: 15, destreza: 14, constituicao: 13, inteligencia: 12, sabedoria: 10, presenca: 8 });
  render();
}

function renderOptions() {
  $("#origin").innerHTML = Object.entries(origins).map(([value, item]) => `<option value="${value}">${item.label}</option>`).join("");
  $("#specialization").innerHTML = Object.entries(specs).map(([value, item]) => `<option value="${value}">${item.label}</option>`).join("");
  $("#techAttr").innerHTML = attributes.map(([value, label, short]) => `<option value="${value}">${short} · ${label}</option>`).join("");
}

function renderAttributes() {
  $("#attributes").innerHTML = attributes
    .map(([id, label, short]) => {
      const value = state.attrs[id];
      return `
        <article class="attribute-card" data-attr="${id}">
          <span>${short}</span>
          <strong>${label}</strong>
          <div class="attribute-controls">
            <button type="button" data-step="-1" aria-label="Reduzir ${label}">−</button>
            <input type="number" min="0" max="${maxAttrFor(id)}" value="${value}" aria-label="${label}" />
            <button type="button" data-step="1" aria-label="Aumentar ${label}">+</button>
          </div>
          <span>Mod ${signed(mod(value))} · Limite ${maxAttrFor(id)}</span>
        </article>
      `;
    })
    .join("");

  $$(".attribute-card").forEach((card) => {
    const attr = card.dataset.attr;
    card.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        state.attrs[attr] = clamp(state.attrs[attr] + Number(button.dataset.step), 0, maxAttrFor(attr));
        render();
      });
    });
    card.querySelector("input").addEventListener("input", (event) => {
      state.attrs[attr] = clamp(event.target.value, 0, maxAttrFor(attr));
      render();
    });
  });
}

function renderOrbit() {
  $$(".orbit-node").forEach((node) => {
    const attr = node.dataset.attr;
    const found = attributes.find(([id]) => id === attr);
    const value = state.attrs[attr];
    node.innerHTML = `<strong>${value}</strong><span>${found[1]}</span><small>${found[2]}</small>`;
    node.title = "Clique para aumentar. Shift+clique para reduzir.";
    node.onclick = (event) => {
      state.attrs[attr] = clamp(value + (event.shiftKey ? -1 : 1), 0, maxAttrFor(attr));
      render();
    };
  });
}

function renderSkills(calc) {
  $("#skillList").innerHTML = skills
    .map(([name, attr, trained]) => {
      const attribute = attributes.find(([id]) => id === attr);
      const train = trained ? calc.bt : 0;
      const bonus = mod(state.attrs[attr]) + calc.halfLevel + train;
      return `
        <div class="skill-row ${trained ? "trained" : ""}">
          <span class="skill-name">${name}</span>
          <span>(${attribute[2]})</span>
          <span>${signed(bonus)}</span>
          <span class="train">${train}</span>
        </div>
      `;
    })
    .join("");
}

function render() {
  $("#level").value = clamp($("#level").value, 1, 20);
  const spec = specs[$("#specialization").value];
  if (!spec.key.includes($("#techAttr").value)) $("#techAttr").value = spec.key[0];

  const calc = calculate();
  const warnings = validate(calc);
  const characterName = $("#name").value.trim() || "Investigador Sem Nome";

  $("#homeAgentName").textContent = characterName;
  $("#gradeBadge").textContent = grade(calc.level);
  $("#levelTrace").textContent = `Nível ${calc.level} · BT ${signed(calc.bt)} · XP base ${xpTable[calc.level - 1].toLocaleString("pt-BR")}`;
  $("#hp").textContent = `${calc.hp} / ${calc.hp}`;
  $("#energyLabel").textContent = calc.restricted ? "Estamina" : "PE";
  $("#energy").textContent = `${calc.energy} / ${calc.energy}`;
  $("#defense").textContent = calc.defense;
  $("#initiative").textContent = signed(calc.initiative);
  $("#attention").textContent = calc.attention;
  $("#techDc").textContent = calc.techDc;
  $("#integrity").textContent = `${calc.hp} / ${calc.hp}`;
  $("#defenseFormula").textContent = `10 + ${signed(calc.des)} DES + ${calc.halfLevel} nível`;
  $("#soulFill").style.width = `${Math.max(18, Math.min(100, (calc.hp / 120) * 100))}%`;
  $("#pointBuy").textContent = `Point Buy: ${17 - calc.spent} restante(s)`;
  $("#pointBuy").style.color = calc.spent > 17 ? "var(--red)" : "var(--gold)";

  $("#warnings").innerHTML = warnings.length ? warnings.map((item) => `<div class="warning">${item}</div>`).join("") : "<div>Ficha dentro das validações imperativas.</div>";

  $("#summaryCards").innerHTML = [
    ["Origem", origins[$("#origin").value].text],
    ["Especialização", spec.text],
    ["Vida", `${spec.hpBase} + CON no nível 1; depois ${spec.die} ou ${spec.hpFixed} + CON.`],
    [calc.restricted ? "Estamina" : "Energia", calc.restricted ? "4 × nível, recupera por descanso." : `${spec.energy} PE por nível.`],
  ].map(([title, text]) => `<article class="summary-card"><strong>${title}</strong><span>${text}</span></article>`).join("");

  $("#jsonBox").textContent = JSON.stringify(characterJson(calc, warnings), null, 2);
  $("#inventoryPreview").innerHTML = [
    ["Armas", `${ARMAS?.corpoACorpo?.itens?.length ?? 0} corpo a corpo, ${ARMAS?.distancia?.itens?.length ?? 0} à distância.`],
    ["Talentos", `${TALENTOS?.gerais?.itens?.length ?? 0} gerais parseados, mais talentos por origem.`],
    ["Habilidades", `${Object.keys(HABILIDADES ?? {}).length} especializações mapeadas.`],
  ].map(([title, text]) => `<article class="summary-card"><strong>${title}</strong><span>${text}</span></article>`).join("");
  renderOrbit();
  renderSkills(calc);
  renderAttributes();
}

function bind() {
  ["#name", "#level", "#xp", "#origin", "#specialization", "#techAttr", "#perceptionTrained"].forEach((selector) => {
    $(selector).addEventListener("input", render);
    $(selector).addEventListener("change", render);
  });

  $$(".nav-button[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      openTab(button.dataset.tab);
    });
  });

  $$("[data-open-tab]").forEach((button) => {
    button.addEventListener("click", () => openTab(button.dataset.openTab));
  });

  const newAgentBtn = $("#newAgentBtn");
  if (newAgentBtn) {
    newAgentBtn.addEventListener("click", () => {
      resetCharacter();
      openTab("builder");
    });
  }

  $$(".detail-tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".detail-tab").forEach((item) => item.classList.remove("is-active"));
      $$(".detail-panel").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      $(`#${button.dataset.detail}`).classList.add("is-active");
    });
  });

  $("#randomizeBtn").addEventListener("click", () => {
    const names = ["Akio Fushida", "Mika Zenrai", "Taro Kogane", "Nina Kamo", "Ren Inumaki"];
    const originKeys = Object.keys(origins);
    const specKeys = Object.keys(specs);
    $("#name").value = names[Math.floor(Math.random() * names.length)];
    $("#level").value = Math.ceil(Math.random() * 12);
    $("#origin").value = originKeys[Math.floor(Math.random() * originKeys.length)];
    $("#specialization").value = specKeys[Math.floor(Math.random() * specKeys.length)];
    if ($("#origin").value === "restringido") $("#specialization").value = "restringido";
    const values = [15, 14, 13, 12, 10, 8].sort(() => Math.random() - 0.5);
    attributes.forEach(([id], index) => {
      state.attrs[id] = values[index];
    });
    render();
  });

  $("#copyBtn").addEventListener("click", async () => {
    await navigator.clipboard.writeText($("#jsonBox").textContent);
    $("#copyBtn").textContent = "Copiado";
    setTimeout(() => ($("#copyBtn").textContent = "Copiar JSON"), 1200);
  });
}

function openTab(tabId) {
  const activeNav = tabId === "builder" || tabId === "builder-list" ? "builder" : tabId;
  $$(".nav-button").forEach((item) => item.classList.toggle("is-active", item.dataset.tab === activeNav));
  $$(".tab-panel").forEach((item) => item.classList.toggle("is-active", item.id === tabId));
}

function renderActions() {
  $("#actionList").innerHTML = actions.map(([title, text]) => `<article class="action-card"><strong>${title}</strong><span>${text}</span></article>`).join("");
}

function startCanvas() {
  const canvas = $("#veil");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    particles = Array.from({ length: Math.min(70, Math.floor(window.innerWidth / 18)) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1 + Math.random() * 1.8,
      vx: -0.12 + Math.random() * 0.24,
      vy: 0.12 + Math.random() * 0.44,
      c: Math.random() > 0.72 ? "rgba(201,45,54,.48)" : "rgba(236,231,220,.18)",
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx * devicePixelRatio;
      p.y += p.vy * devicePixelRatio;
      if (p.y > canvas.height) p.y = 0;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

renderOptions();
renderActions();
bind();
render();
startCanvas();
