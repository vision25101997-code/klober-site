// Klober Central: puts the anatomy station on the left island (desktop) and runs it.
await new Promise((ok) => { const t = setInterval(() => { if (document.querySelector('#islands .isl[data-isl="0"] .isl-in')) { clearInterval(t); ok(); } }, 150); });
{
  const css = document.createElement("style");
  css.textContent = ".iso{\n  --anatomy-page:#0b0b0b;--anatomy-card:#131313;--anatomy-text:#a3a3a3;--anatomy-strong:#e6e6e6;--anatomy-muted:#6e6e6e;\n  --anatomy-paper:#131313;--anatomy-face:#1b1b1b;--anatomy-top:#1c1c1c;\n  --anatomy-shade-0:#0f0f0f;--anatomy-shade-1:#121212;--anatomy-shade-2:#151515;--anatomy-shade-3:#181818;\n  --anatomy-lit-top:#262626;--anatomy-lit-shade:#1d1d1d;\n  --anatomy-hi:#d4d4d4;--anatomy-mid:#6a6a6a;--anatomy-lo:#3e3e3e;--anatomy-faint:#2a2a2a;--anatomy-lit:#ffffff;\n  --anatomy-halo:#050505;--anatomy-halo-opacity:.9;--anatomy-dot:#e6e6e6;\n  --anatomy-red:#ff6b6b;--anatomy-green:#6be0a0;--anatomy-blue:#6b9bff;\n  --anatomy-weight:.6px;--anatomy-ease:cubic-bezier(.32,.72,0,1);\n  --anatomy-mono:ui-monospace,\"SF Mono\",Menlo,Consolas,monospace;\n  --anatomy-lift:inset 0 1px 0 0 #ffffff0a,inset 0 0 0 1px #ffffff06,0 0 0 1px #00000026,0 1px 1px -.5px #00000014,0 3px 3px -1.5px #00000014,0 6px 6px -3px #00000014,0 12px 12px -6px #00000014;\n}\n.iso[data-theme=\"light\"]{\n  --anatomy-page:#f2f2ef;--anatomy-card:#fbfbfa;--anatomy-text:#57575a;--anatomy-strong:#18181a;--anatomy-muted:#8c8c90;\n  --anatomy-paper:#fbfbfa;--anatomy-face:#ffffff;--anatomy-top:#ffffff;\n  --anatomy-shade-0:#dcdcd9;--anatomy-shade-1:#e5e5e2;--anatomy-shade-2:#ededea;--anatomy-shade-3:#f4f4f1;\n  --anatomy-lit-top:#ffffff;--anatomy-lit-shade:#eeeeeb;\n  --anatomy-hi:#26262a;--anatomy-mid:#8a8a8f;--anatomy-lo:#b4b4b8;--anatomy-faint:#d4d4d6;--anatomy-lit:#000000;\n  --anatomy-halo:#8a8a80;--anatomy-halo-opacity:.32;--anatomy-dot:#3a3a3e;\n  --anatomy-red:#e5484d;--anatomy-green:#30a46c;--anatomy-blue:#3e63dd;\n  --anatomy-lift:inset 0 1px 0 0 #ffffff,0 0 0 1px #0000000f,0 1px 1px -.5px #0000000a,0 3px 3px -1.5px #0000000a,0 6px 6px -3px #0000000a,0 12px 12px -6px #0000000a;\n}\n.iso-svg{display:block;width:100%;height:auto;overflow:visible}\n.iso-svg path,.iso-svg circle{vector-effect:non-scaling-stroke}\n.iso-fill{fill:var(--anatomy-paper);stroke:none}\n.iso-solid[data-lit]>.iso-fill{fill:var(--anatomy-face)}\n.iso-shade,.iso-top{stroke:none}\n.iso-shade[data-shade=\"0\"]{fill:var(--anatomy-shade-0)}\n.iso-shade[data-shade=\"1\"]{fill:var(--anatomy-shade-1)}\n.iso-shade[data-shade=\"2\"]{fill:var(--anatomy-shade-2)}\n.iso-shade[data-shade=\"3\"]{fill:var(--anatomy-shade-3)}\n.iso-top{fill:var(--anatomy-top)}\n.iso-solid[data-lit]>.iso-top{fill:var(--anatomy-lit-top)}\n.iso-solid[data-lit]>.iso-shade{fill:var(--anatomy-lit-shade)}\n.iso-solid[data-seamless]>.iso-shade,.iso-solid[data-seamless]>.iso-top{stroke-width:.4;stroke-linejoin:round}\n.iso-solid[data-seamless]>.iso-shade[data-shade=\"0\"]{stroke:var(--anatomy-shade-0)}\n.iso-solid[data-seamless]>.iso-shade[data-shade=\"1\"]{stroke:var(--anatomy-shade-1)}\n.iso-solid[data-seamless]>.iso-shade[data-shade=\"2\"]{stroke:var(--anatomy-shade-2)}\n.iso-solid[data-seamless]>.iso-shade[data-shade=\"3\"]{stroke:var(--anatomy-shade-3)}\n.iso-solid[data-seamless]>.iso-top{stroke:var(--anatomy-top)}\n.iso-solid[data-seamless][data-lit]>.iso-top{stroke:var(--anatomy-lit-top)}\n.iso-solid[data-seamless][data-lit]>.iso-shade{stroke:var(--anatomy-lit-shade)}\n.iso-solid[data-lit]>.iso-edge{stroke:var(--anatomy-lit)}\n.iso-halo{fill:var(--anatomy-halo);stroke:none;filter:blur(9px);opacity:var(--anatomy-halo-opacity);transform:translateY(3px)}\n.iso-line{fill:none;stroke:var(--anatomy-lo);stroke-width:var(--anatomy-weight);stroke-linecap:round;stroke-linejoin:round}\n.iso-line[data-tone=\"hi\"]{stroke:var(--anatomy-hi)}\n.iso-line[data-tone=\"mid\"]{stroke:var(--anatomy-mid)}\n.iso-line[data-tone=\"lo\"]{stroke:var(--anatomy-lo)}\n.iso-line[data-tone=\"faint\"]{stroke:var(--anatomy-faint)}\n.iso-line[data-tone=\"lit\"]{stroke:var(--anatomy-lit)}\n.iso-line[data-tone=\"red\"]{stroke:var(--anatomy-red)}\n.iso-line[data-tone=\"green\"]{stroke:var(--anatomy-green)}\n.iso-line[data-tone=\"blue\"]{stroke:var(--anatomy-blue)}\n.iso-line[data-dotted]{stroke-dasharray:.01 3.5;stroke-width:1}\n.iso-line[data-dashed]{stroke-dasharray:3 3}\n.iso-line[data-flow]{stroke-dasharray:2 6}\n.iso-wire-end{fill:var(--anatomy-paper);stroke:var(--anatomy-lo);stroke-width:var(--anatomy-weight)}\n.iso-wire[data-tone=\"hi\"] .iso-wire-end{stroke:var(--anatomy-hi)}\n.iso-wire[data-tone=\"mid\"] .iso-wire-end{stroke:var(--anatomy-mid)}\n.iso-wire[data-tone=\"faint\"] .iso-wire-end{stroke:var(--anatomy-faint)}\n.iso-wire[data-tone=\"lit\"] .iso-wire-end{stroke:var(--anatomy-lit)}\n.iso-dots circle{fill:var(--anatomy-dot);stroke:none;opacity:.32}\n.iso-dots[data-tone=\"hi\"] circle{opacity:.85}\n.iso-dots[data-tone=\"mid\"] circle{opacity:.45}\n.iso-dots[data-tone=\"lo\"] circle{opacity:.22}\n.iso-dots[data-tone=\"faint\"] circle{opacity:.12}\n.iso-face-text{fill:var(--anatomy-mid);font-family:var(--anatomy-mono);letter-spacing:.04em}\n.iso-face-text[data-tone=\"hi\"]{fill:var(--anatomy-hi)}\n.iso-face-text[data-tone=\"lo\"]{fill:var(--anatomy-lo)}\n.iso-face-text[data-tone=\"faint\"]{fill:var(--anatomy-faint)}\n.tb-body{fill:var(--anatomy-shade-2);stroke:none}\n.tb-shine{fill:var(--anatomy-top);stroke:none}\n.tb-shade{fill:var(--anatomy-shade-0);stroke:none}\n.tb-ring{fill:none;stroke:var(--anatomy-lo);stroke-width:.45;stroke-linecap:butt;stroke-linejoin:round}\n.tb-ring[data-tone=\"mid\"]{stroke:var(--anatomy-mid)}\n.tb-ring[data-tone=\"faint\"]{stroke:var(--anatomy-faint)}\n.tb-ring[data-tone=\"hi\"]{stroke:var(--anatomy-hi)}\n@keyframes iso-flow{to{stroke-dashoffset:-32}}\n@keyframes iso-pulse{0%,100%{opacity:.18}12%{opacity:1}40%{opacity:.18}}\n.iso-line[data-flow]{animation:iso-flow 1600ms linear infinite}\n.iso-dots circle[data-pulse]{animation:iso-pulse 1600ms steps(1,end) infinite;animation-delay:var(--pulse-at,0ms)}\n.iso-figure{margin:32px 0 36px}\n.iso-plate{position:relative;padding:52px 24px;border-radius:0;background:var(--anatomy-card);box-shadow:0 0 0 1px var(--anatomy-mid);--anatomy-paper:var(--anatomy-card)}\n.iso-plate-corners{position:absolute;inset:18px 20px;pointer-events:none}\n.iso-plate-corner{position:absolute;color:var(--anatomy-muted);font-family:var(--anatomy-mono);font-size:10.5px;line-height:1;letter-spacing:.04em;white-space:nowrap}\n.iso-plate-corner[data-corner=\"fig\"]{top:0;left:0;color:var(--anatomy-text)}\n.iso-plate-corner[data-corner=\"title\"]{top:0;right:0;text-transform:uppercase;letter-spacing:.1em}\n.iso-plate-corner[data-corner=\"hint\"]{bottom:0;left:0;text-transform:uppercase;letter-spacing:.1em}\n.iso-plate-corner[data-corner=\"readout\"]{right:0;bottom:0;color:var(--anatomy-text);font-variant-numeric:tabular-nums}\n.iso-plate .iso-svg{margin:0 auto}\n.iso-legend{display:grid;gap:8px;margin-top:12px;color:var(--anatomy-muted);font-size:13px;line-height:1.55}\n.iso-keys{display:flex;flex-wrap:wrap;gap:6px 18px}\n.iso-key{display:inline-flex;align-items:center;gap:7px}\n.iso-swatch{width:16px;height:10px;flex:none;overflow:visible}\n.iso-swatch path{fill:none;stroke:var(--anatomy-hi);stroke-width:1;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}\n.iso-swatch[data-mark=\"raised\"] path,.iso-swatch[data-mark=\"flat\"] path{stroke:var(--anatomy-mid)}\n.iso-swatch[data-mark=\"lit\"] path{stroke:var(--anatomy-lit)}\n.iso-swatch[data-mark=\"dim\"] path{stroke:var(--anatomy-lo)}\n.iso-swatch[data-mark=\"dotted\"] path{stroke-dasharray:.01 3;stroke-width:1.4}\n.iso-swatch[data-mark=\"dashed\"] path{stroke-dasharray:3 2.5}\n.iso-swatch[data-mark=\"red\"] path{stroke:var(--anatomy-red)}\n.iso-swatch[data-mark=\"green\"] path{stroke:var(--anatomy-green)}\n.iso-swatch[data-mark=\"blue\"] path{stroke:var(--anatomy-blue)}\n.iso-swatch-crease{stroke:var(--anatomy-lo)!important}\n@media (max-width:560px){.iso-plate{padding:48px 12px 70px}.iso-plate-corner[data-corner=\"hint\"]{bottom:18px}}\n@media (prefers-reduced-motion:reduce){.iso-line[data-flow],.iso-dots circle[data-pulse]{animation:none}}\n.station-anatomy{--anatomy-hi:#2b2460;--anatomy-mid:#5b5585;--anatomy-lo:#8a84ad;--anatomy-faint:#c9c3dc;--anatomy-lit:#2b2460;--anatomy-dot:#2b2460;--anatomy-paper:#f4f2e4}.station-anatomy path,.station-anatomy line{vector-effect:non-scaling-stroke}.station-anatomy [data-part=flap-row] text{fill:#ffe9b0!important;font-family:ui-monospace,Menlo,monospace;font-weight:700}.station-anatomy .red-lamp[data-on] .iso-fill,.station-anatomy .red-lamp[data-on] .iso-shade{fill:#e5484d!important}.islands .old-mush,.islands .old-crew{display:none}";
  document.head.appendChild(css);
  const isl = document.querySelector('#islands .isl[data-isl="0"] .isl-in');
  const kids = [...isl.children];
  const stem = kids.findIndex((n) => (n.getAttribute("d") || "").startsWith("M204 344C214 326"));
  const crew = kids.findIndex((n) => n.classList && n.classList.contains("crewbob"));
  if (stem >= 0 && crew > stem) {
    kids.slice(stem, crew).forEach((n) => n.classList.add("old-mush"));
    kids.slice(crew).forEach((n) => n.classList.add("old-crew"));
    const doc = new DOMParser().parseFromString(await (await fetch("assets/icons/station.svg?v=20261122a")).text(), "image/svg+xml");
    isl.insertBefore(document.importNode(doc.documentElement.firstElementChild, true), kids[crew]);
  }
}
const AZIMUTH = 45;
const ELEVATION = 30;
const SHADES = 4;
const RADIANS = Math.PI / 180;
const UNIT = Math.sqrt(1.6);
function cameraOf({ scale, azimuth = AZIMUTH, elevation = ELEVATION }) {
    const a = azimuth * RADIANS;
    const e = elevation * RADIANS;
    return { sinA: Math.sin(a), cosA: Math.cos(a), sinE: Math.sin(e), cosE: Math.cos(e), k: scale * UNIT };
}
function iso([x, y, z], projection) {
    const { origin } = projection;
    const { sinA, cosA, sinE, cosE, k } = cameraOf(projection);
    return [origin[0] + (x * sinA - y * cosA) * k, origin[1] + ((x * cosA + y * sinA) * sinE - z * cosE) * k];
}
function towardViewer(projection) {
    const { sinA, cosA } = cameraOf(projection);
    return [cosA, sinA];
}
function depthOf([x, y, z], projection) {
    const { sinA, cosA, sinE, cosE } = cameraOf(projection);
    return (x * cosA + y * sinA) * cosE + z * sinE;
}
const tenth = (value) => {
    const text = (Math.round(value * 10) / 10).toFixed(1).replace(/\.0$/, "");
    return text === "-0" ? "0" : text;
};
function pathOf(points, closed = false) {
    if (!points.length)
        return "";
    return points.map(([x, y], at) => `${at ? "L" : "M"}${tenth(x)} ${tenth(y)}`).join("") + (closed ? "Z" : "");
}
const joinPaths = (paths) => paths.filter(Boolean).join("");
function roundedPlan({ x, y, w, d, r }, steps = 8) {
    const radius = Math.max(0, Math.min(r, w / 2, d / 2));
    const corners = [
        [x + w - radius, y + radius, -90],
        [x + w - radius, y + d - radius, 0],
        [x + radius, y + d - radius, 90],
        [x + radius, y + radius, 180],
    ];
    const out = [];
    for (const [cx, cy, start] of corners) {
        const count = radius > 0 ? steps : 0;
        for (let step = 0; step <= count; step++) {
            const angle = (start + (count ? (90 * step) / count : 45)) * RADIANS;
            out.push([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]);
        }
    }
    return out;
}
function signedArea(points) {
    let area = 0;
    for (let index = 0; index < points.length; index++) {
        const [ax, ay] = points[index];
        const [bx, by] = points[(index + 1) % points.length];
        area += ax * by - bx * ay;
    }
    return area / 2;
}
const oriented = (points) => (signedArea(points) < 0 ? [...points].reverse() : points);
function convexHull(points) {
    const sorted = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    if (sorted.length < 3)
        return sorted;
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lower = [];
    for (const point of sorted) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0)
            lower.pop();
        lower.push(point);
    }
    const upper = [];
    for (let index = sorted.length - 1; index >= 0; index--) {
        const point = sorted[index];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0)
            upper.pop();
        upper.push(point);
    }
    return [...lower.slice(0, -1), ...upper.slice(0, -1)];
}
function runsOf(flags, want) {
    const count = flags.length;
    const runs = [];
    const start = flags.findIndex((flag, index) => flag !== flags[(index + count - 1) % count]);
    if (start < 0)
        return flags[0] === want ? [Array.from({ length: count + 1 }, (_, index) => index % count)] : [];
    let run = null;
    for (let step = 0; step < count; step++) {
        const index = (start + step) % count;
        if (flags[index] === want) {
            if (!run)
                run = [index];
            run.push((index + 1) % count);
        }
        else if (run) {
            runs.push(run);
            run = null;
        }
    }
    if (run)
        runs.push(run);
    return runs;
}
function extrude(ring, z, height, projection, options = {}) {
    const convex = options.convex ?? true;
    const count = ring.length;
    const counter = signedArea(ring) > 0;
    const [vx, vy] = towardViewer(projection);
    const { sinA, cosA } = cameraOf(projection);
    const normals = ring.map(([ax, ay], index) => {
        const [bx, by] = ring[(index + 1) % count];
        const dx = bx - ax;
        const dy = by - ay;
        const length = Math.hypot(dx, dy) || 1;
        return (counter ? [dy / length, -dx / length] : [-dy / length, dx / length]);
    });
    const facing = normals.map(([nx, ny]) => nx * vx + ny * vy > 1e-9);
    const top = ring.map(([x, y]) => iso([x, y, z + height], projection));
    const bottom = ring.map(([x, y]) => iso([x, y, z], projection));
    const outline = [];
    const crease = [];
    for (const run of runsOf(facing, false))
        outline.push(pathOf(run.map((index) => top[index])));
    for (const run of runsOf(facing, true)) {
        crease.push(pathOf(run.map((index) => top[index])));
        if (height > 0)
            outline.push(pathOf(run.map((index) => bottom[index])));
    }
    if (height > 0) {
        for (let index = 0; index < count; index++) {
            if (facing[(index + count - 1) % count] !== facing[index])
                outline.push(pathOf([top[index], bottom[index]]));
        }
    }
    let fill;
    if (convex) {
        fill = pathOf(convexHull([...top, ...bottom]), true);
    }
    else {
        const parts = [pathOf(oriented(top), true), pathOf(oriented(bottom), true)];
        for (let index = 0; index < count; index++) {
            if (!facing[index])
                continue;
            const next = (index + 1) % count;
            parts.push(pathOf(oriented([top[index], top[next], bottom[next], bottom[index]]), true));
        }
        fill = parts.join("");
    }
    const buckets = Array.from({ length: SHADES }, () => []);
    if (height > 0) {
        const [lx, ly] = [-sinA, cosA];
        for (let index = 0; index < count; index++) {
            if (!facing[index])
                continue;
            const [nx, ny] = normals[index];
            const lit = (nx * lx + ny * ly + 1) / 2;
            const shade = Math.min(SHADES - 1, Math.max(0, Math.floor(lit * SHADES)));
            const next = (index + 1) % count;
            buckets[shade].push(pathOf(oriented([top[index], top[next], bottom[next], bottom[index]]), true));
        }
    }
    let bevel;
    if (options.bevel && options.bevel > 0) {
        const by = options.bevel;
        const inset = ring.map(([x, y], index) => {
            const [ax, ay] = normals[(index + count - 1) % count];
            const [bx, by2] = normals[index];
            const mx = ax + bx;
            const my = ay + by2;
            const length = Math.hypot(mx, my) || 1;
            return [x - (mx / length) * by, y - (my / length) * by];
        });
        const insetTop = inset.map(([x, y]) => iso([x, y, z + height], projection));
        bevel = runsOf(facing, true)
            .map((run) => pathOf([top[run[0]], ...run.slice(1, -1).map((index) => insetTop[index]), top[run[run.length - 1]]]))
            .join("");
    }
    return {
        fill,
        outline: outline.join(""),
        crease: crease.join(""),
        top: pathOf(oriented(top), true),
        shades: buckets.map((paths) => paths.join("")),
        bevel,
    };
}
const ringOf = (plan, steps = 8) => roundedPlan(plan, steps);
function slabOf(plan, z, height, projection, steps = 8, bevel = 0) {
    return extrude(ringOf(plan, steps), z, height, projection, { convex: true, bevel });
}
function circleRing(cx, cy, radius, steps = 40) {
    return Array.from({ length: steps }, (_, step) => {
        const angle = (step / steps) * Math.PI * 2;
        return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
    });
}
function cylinder(cx, cy, radius, z, height, projection, steps = 32, bevel = 0) {
    return extrude(circleRing(cx, cy, radius, steps), z, height, projection, { convex: true, bevel });
}
const insetPlan = ({ x, y, w, d, r }, by) => ({ x: x + by, y: y + by, w: w - by * 2, d: d - by * 2, r: Math.max(0, r - by) });
function onTop(points, z, projection, closed = false) {
    return pathOf(points.map(([x, y]) => iso([x, y, z], projection)), closed);
}
const planOutline = (plan, z, projection, steps = 8) => onTop(ringOf(plan, steps), z, projection, true);
const lineOnTop = (from, to, z, projection) => onTop([from, to], z, projection);
const segment = (from, to, projection) => pathOf([iso(from, projection), iso(to, projection)]);
const rise = (at, from, to, projection) => segment([at[0], at[1], from], [at[0], at[1], to], projection);
const ring = (cx, cy, radius, z, projection, steps = 40) => onTop(circleRing(cx, cy, radius, steps), z, projection, true);
const pointsAt = (points, projection) => points.map((point) => iso(point, projection));
function dotGrid(x, y, columns, rows, gap, z, projection) {
    const dots = [];
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++)
            dots.push(iso([x + column * gap, y + row * gap, z], projection));
    }
    return dots;
}
function corners({ x, y, w, d }, inset = 0) {
    return [
        [x + inset, y + inset],
        [x + w - inset, y + inset],
        [x + inset, y + d - inset],
        [x + w - inset, y + d - inset],
    ];
}
function boxCorners({ x, y, w, d }, z0, z1) {
    const out = [];
    for (const px of [x, x + w])
        for (const py of [y, y + d])
            for (const z of [z0, z1])
                out.push([px, py, z]);
    return out;
}
function knurl(cx, cy, radius, z0, z1, count, projection, inset = 0.4) {
    const [vx, vy] = towardViewer(projection);
    const lines = [];
    for (let index = 0; index < count; index++) {
        const angle = (index / count) * Math.PI * 2;
        const nx = Math.cos(angle);
        const ny = Math.sin(angle);
        if (nx * vx + ny * vy < 0.15)
            continue;
        lines.push(segment([cx + radius * nx, cy + radius * ny, z0 + inset], [cx + radius * nx, cy + radius * ny, z1 - inset], projection));
    }
    return lines.join("");
}
function sideArc(cx, cy, radius, z, projection, steps = 24) {
    const [vx, vy] = towardViewer(projection);
    const facing = Math.atan2(vy, vx);
    const points = [];
    for (let step = 0; step <= steps; step++) {
        const angle = facing - Math.PI / 2 + (step / steps) * Math.PI;
        points.push(iso([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle), z], projection));
    }
    return pathOf(points);
}
function ringSeam(ring, z, projection) {
    const count = ring.length;
    const counter = signedArea(ring) > 0;
    const [vx, vy] = towardViewer(projection);
    const facing = ring.map(([ax, ay], index) => {
        const [bx, by] = ring[(index + 1) % count];
        const dx = bx - ax;
        const dy = by - ay;
        const [nx, ny] = counter ? [dy, -dx] : [-dy, dx];
        return nx * vx + ny * vy > 1e-9;
    });
    return runsOf(facing, true).map((run) => pathOf(run.map((index) => iso([ring[index][0], ring[index][1], z], projection)))).join("");
}
const sideSeam = (plan, z, projection, steps = 8) => ringSeam(ringOf(plan, steps), z, projection);
function sideRing(center, radius, axis, projection, steps = 20) {
    const [px, py, pz] = center;
    const points = [];
    for (let step = 0; step < steps; step++) {
        const angle = (step / steps) * Math.PI * 2;
        const u = radius * Math.cos(angle);
        const v = radius * Math.sin(angle);
        points.push(iso(axis === "x" ? [px, py + u, pz + v] : [px + u, py, pz + v], projection));
    }
    return pathOf(points, true);
}
function coil(from, to, center, radius, turns, axis, projection, perTurn = 16) {
    const count = Math.max(1, Math.round(turns * perTurn));
    const back = [];
    const front = [];
    let run = [];
    let near = null;
    for (let index = 0; index <= count; index++) {
        const share = index / count;
        const angle = share * turns * Math.PI * 2;
        const u = radius * Math.cos(angle);
        const v = radius * Math.sin(angle);
        const along = from + (to - from) * share;
        const point = axis === "x" ? [along, center[0] + u, center[1] + v] : [center[0] + u, along, center[1] + v];
        const normal = axis === "x" ? [0, Math.cos(angle), Math.sin(angle)] : [Math.cos(angle), 0, Math.sin(angle)];
        const facing = depthOf(normal, projection) > 0;
        const flat = iso(point, projection);
        if (near === null)
            near = facing;
        if (facing !== near) {
            run.push(flat);
            (near ? front : back).push(pathOf(run));
            run = [flat];
            near = facing;
            continue;
        }
        run.push(flat);
    }
    if (run.length > 1)
        (near ? front : back).push(pathOf(run));
    return { back: back.join(""), front: front.join("") };
}
function topTicks(from, to, step, every, edge, z, lengths, projection, axis = "x") {
    const minor = [];
    const major = [];
    const first = Math.ceil(from / step) * step;
    for (let at = first, index = Math.round(first / step); at <= to + 1e-9; at += step, index++) {
        const big = index % every === 0;
        const length = big ? lengths[1] : lengths[0];
        const a = axis === "x" ? [at, edge] : [edge, at];
        const b = axis === "x" ? [at, edge + length] : [edge + length, at];
        (big ? major : minor).push(lineOnTop(a, b, z, projection));
    }
    return { minor: minor.join(""), major: major.join("") };
}
function sideTicks(from, to, step, every, face, top, lengths, projection, axis = "x") {
    const minor = [];
    const major = [];
    const first = Math.ceil(from / step) * step;
    for (let at = first, index = Math.round(first / step); at <= to + 1e-9; at += step, index++) {
        const big = index % every === 0;
        const length = big ? lengths[1] : lengths[0];
        const a = axis === "x" ? [at, face, top] : [face, at, top];
        const b = axis === "x" ? [at, face, top - length] : [face, at, top - length];
        (big ? major : minor).push(segment(a, b, projection));
    }
    return { minor: minor.join(""), major: major.join("") };
}
function radialTicks(cx, cy, radius, count, every, z, lengths, projection, from = 0, span = Math.PI * 2) {
    const minor = [];
    const major = [];
    const closed = Math.abs(span - Math.PI * 2) < 1e-9;
    const steps = closed ? count : count + 1;
    for (let index = 0; index < steps; index++) {
        const angle = from + (index / count) * span;
        const big = index % every === 0;
        const inner = radius - (big ? lengths[1] : lengths[0]);
        const sx = Math.sin(angle);
        const sy = -Math.cos(angle);
        (big ? major : minor).push(lineOnTop([cx + sx * inner, cy + sy * inner], [cx + sx * radius, cy + sy * radius], z, projection));
    }
    return { minor: minor.join(""), major: major.join("") };
}
const haloOf = (plan, z, height, projection) => slabOf(plan, z, height, projection).fill;
function axisVector(projection, [dx, dy, dz]) {
    const origin = iso([0, 0, 0], projection);
    const moved = iso([dx, dy, dz], projection);
    return [moved[0] - origin[0], moved[1] - origin[1]];
}
const fine = (value) => Math.round(value * 100) / 100;
function translateAlong(projection, by) {
    const [x, y] = axisVector(projection, by);
    return `translate(${fine(x)} ${fine(y)})`;
}
const thousandth = (value) => Math.round(value * 1000) / 1000;
function axesAt(at, z, projection) {
    const origin = iso([at[0], at[1], z], projection);
    const along = (point) => {
        const [px, py] = iso(point, projection);
        return [px - origin[0], py - origin[1]];
    };
    return { origin, x: along([at[0] + 1, at[1], z]), y: along([at[0], at[1] + 1, z]), z: along([at[0], at[1], z + 1]) };
}
const matrixOf = (u, v, origin) => `matrix(${thousandth(u[0])} ${thousandth(u[1])} ${thousandth(v[0])} ${thousandth(v[1])} ${thousandth(origin[0])} ${thousandth(origin[1])})`;
function holdStill(element, [dx, dy]) {
    const text = dx || dy ? `translate(${-dx} ${-dy})` : "";
    element.querySelectorAll("[data-hold]").forEach((node) => (text ? node.setAttribute("transform", text) : node.removeAttribute("transform")));
}
function topMatrix(at, z, projection, along = "x") {
    const { origin, x, y } = axesAt(at, z, projection);
    return along === "x" ? matrixOf(x, y, origin) : matrixOf([-y[0], -y[1]], x, origin);
}
function sideMatrix(at, z, projection, face) {
    const { origin, x, y, z: up } = axesAt(at, z, projection);
    const down = [-up[0], -up[1]];
    return face === "left" ? matrixOf(x, down, origin) : matrixOf([-y[0], -y[1]], down, origin);
}
function screenRise(height, projection) {
    const { cosE, k } = cameraOf(projection);
    return height * cosE * k;
}
function fitProjection(points, width, height, { pad = 24, headroom = 0, azimuth = AZIMUTH, elevation = ELEVATION } = {}) {
    const unit = { origin: [0, 0], scale: 1, azimuth, elevation };
    const flat = points.map((point) => iso(point, unit));
    const xs = flat.map(([x]) => x);
    const ys = flat.map(([, y]) => y);
    const left = Math.min(...xs);
    const right = Math.max(...xs);
    const up = Math.min(...ys);
    const down = Math.max(...ys);
    const scale = Math.min((width - pad * 2) / (right - left), (height - pad * 2 - headroom) / (down - up));
    return {
        origin: [width / 2 - ((left + right) / 2) * scale, headroom + (height - headroom) / 2 - ((up + down) / 2) * scale],
        scale,
        azimuth,
        elevation,
    };
}
const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const attrs = (pairs) => Object.entries(pairs)
    .filter(([, value]) => value !== undefined && value !== false)
    .map(([key, value]) => ` ${key}="${escape(String(value))}"`)
    .join("");
function solidSvg(paths, { tone = "hi", crease = "faint", halo = false, lit = false, flat = false, className, inner = "" } = {}) {
    const parts = [];
    if (halo)
        parts.push(`<path class="iso-halo" d="${paths.fill}"/>`);
    parts.push(`<path class="iso-fill" d="${paths.fill}"/>`);
    if (!flat) {
        paths.shades.forEach((d, shade) => {
            if (d)
                parts.push(`<path class="iso-shade" data-shade="${shade}" d="${d}"/>`);
        });
        parts.push(`<path class="iso-top" d="${paths.top}"/>`);
    }
    if (crease !== "none" && paths.crease)
        parts.push(`<path class="iso-line iso-crease" data-tone="${crease}" d="${paths.crease}"/>`);
    if (crease !== "none" && paths.bevel)
        parts.push(`<path class="iso-line iso-bevel" data-tone="${crease}" d="${paths.bevel}"/>`);
    if (inner)
        parts.push(inner);
    parts.push(`<path class="iso-line iso-edge" data-tone="${tone}" d="${paths.outline}"/>`);
    return `<g${attrs({ class: className ? `iso-solid ${className}` : "iso-solid", "data-lit": lit ? "" : undefined, "data-seamless": paths.seamless ? "" : undefined })}>${parts.join("")}</g>`;
}
function lineSvg(d, { tone = "lo", dotted = false, dashed = false, flow = false, className, free } = {}) {
    if (!d)
        return "";
    return `<path${attrs({
        class: className ? `iso-line ${className}` : "iso-line",
        "data-tone": tone,
        "data-free": free === true ? "" : free || undefined,
        "data-dotted": dotted ? "" : undefined,
        "data-dashed": dashed ? "" : undefined,
        "data-flow": flow ? "" : undefined,
        d,
    })}/>`;
}
function dotsSvg(points, { size = 0.5, tone = "mid", pulse = false } = {}) {
    const dots = points
        .map(([x, y, alpha], index) => `<circle cx="${tenth(x)}" cy="${tenth(y)}" r="${size}"${alpha !== undefined && alpha < 1 ? ` fill-opacity="${Math.max(0, alpha).toFixed(2)}"` : ""}${pulse ? ` data-pulse="" style="--pulse-at:${(index * 137) % 1600}ms"` : ""}/>`)
        .join("");
    return `<g class="iso-dots" data-tone="${tone}">${dots}</g>`;
}
function fadedSvg(list, style = {}) {
    const groups = new Map();
    for (const entry of list) {
        const [d, alpha] = Array.isArray(entry) ? entry : [entry.d, entry.alpha];
        if (!d || !(alpha > 0.02))
            continue;
        const level = Math.min(1, Math.round(alpha * 20) / 20);
        groups.set(level, (groups.get(level) ?? "") + d);
    }
    return [...groups].map(([alpha, d]) => (alpha >= 1 ? lineSvg(d, style) : `<g opacity="${alpha.toFixed(2)}">${lineSvg(d, style)}</g>`)).join("");
}
function fadeLineSvg(points, { fade = [0, 0], tone = "lo", className, stops = 6 } = {}) {
    if (points.length < 2)
        return "";
    const ease = (t) => t * t * (3 - 2 * t);
    const hashOf = (text) => {
        let hash = 2166136261;
        for (let index = 0; index < text.length; index++)
            hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
        return (hash >>> 0).toString(36);
    };
    const lengths = [0];
    for (let index = 1; index < points.length; index++)
        lengths.push(lengths[index - 1] + Math.hypot(points[index][0] - points[index - 1][0], points[index][1] - points[index - 1][1]));
    const at = (length) => {
        let index = 1;
        while (index < points.length - 1 && lengths[index] < length)
            index++;
        const span = lengths[index] - lengths[index - 1] || 1;
        const t = Math.max(0, Math.min(1, (length - lengths[index - 1]) / span));
        return [points[index - 1][0] + (points[index][0] - points[index - 1][0]) * t, points[index - 1][1] + (points[index][1] - points[index - 1][1]) * t];
    };
    const pieceOf = (from, to) => [at(from), ...points.filter((_, index) => lengths[index] > from + 1e-6 && lengths[index] < to - 1e-6), at(to)];
    const total = lengths[lengths.length - 1];
    if (total < 1e-6)
        return "";
    let [start, end] = Array.isArray(fade) ? fade : [fade, fade];
    if (start + end > total) {
        const share = total / (start + end);
        start *= share;
        end *= share;
    }
    const paint = `var(--anatomy-${tone})`;
    const ramp = (piece, rising) => {
        const d = pathOf(piece);
        const [x1, y1] = piece[0];
        const [x2, y2] = piece[piece.length - 1];
        const id = `iso-fade-${hashOf(`${d}|${tone}|${rising}`)}`;
        const marks = Array.from({ length: stops + 1 }, (_, index) => {
            const t = index / stops;
            const alpha = ease(rising ? t : 1 - t);
            return `<stop offset="${t.toFixed(3)}" stop-opacity="${alpha.toFixed(3)}" style="stop-color:${paint}"/>`;
        }).join("");
        const gradient = `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${tenth(x1)}" y1="${tenth(y1)}" x2="${tenth(x2)}" y2="${tenth(y2)}">${marks}</linearGradient>`;
        return `<defs>${gradient}</defs><path${attrs({ class: className ? `iso-line ${className}` : "iso-line", "data-tone": tone, "data-free": rising ? "start" : "end", d, style: `stroke:url(#${id})` })}/>`;
    };
    const parts = [];
    if (start > 0.05)
        parts.push(ramp(pieceOf(0, start), true));
    if (total - end - start > 0.05)
        parts.push(lineSvg(pathOf(pieceOf(start, total - end)), { tone, className }));
    if (end > 0.05)
        parts.push(ramp(pieceOf(total - end, total), false));
    return `<g class="iso-fade">${parts.join("")}</g>`;
}
function wireSvg(from, to, { via = [], tone = "lo", dotted = false, dashed = false, flow = false, ends = "both", size = 1.2 } = {}) {
    const d = pathOf([from, ...via, to]);
    const end = ([x, y]) => `<circle class="iso-wire-end" cx="${tenth(x)}" cy="${tenth(y)}" r="${size}"/>`;
    return `<g class="iso-wire" data-tone="${tone}">${lineSvg(d, { tone, dotted, dashed, flow })}${ends === "both" || ends === "from" ? end(from) : ""}${ends === "both" || ends === "to" ? end(to) : ""}</g>`;
}
function faceTextSvg(transform, text, { size = 3, tone = "mid", anchor = "start" } = {}) {
    return `<text class="iso-face-text" data-tone="${tone}" transform="${transform}" font-size="${size}" text-anchor="${anchor}">${escape(text)}</text>`;
}
function groupSvg(children, extra = {}) {
    return `<g${attrs(extra)}>${Array.isArray(children) ? children.join("") : children}</g>`;
}
function figureSvg({ width, height, label, body, standalone = false, className }) {
    const style = standalone ? `<style>${ISO_CSS}</style>` : "";
    return `<svg${attrs({
        xmlns: "http://www.w3.org/2000/svg",
        class: `iso-svg${standalone ? " iso" : ""}${className ? ` ${className}` : ""}`,
        "data-theme": standalone || undefined,
        viewBox: `0 0 ${width} ${height}`,
        role: "img",
        "aria-label": label,
    })}>${style}${Array.isArray(body) ? body.join("") : body}</svg>`;
}
function swatchSvg(mark) {
    if (mark === "raised" || mark === "flat" || mark === "lit") {
        const body = mark === "flat" ? "M2 6.5 8 3.5 14 6.5 8 9.5Z" : "M2 4.5 8 1.5 14 4.5 14 6 8 9 2 6Z";
        const crease = mark === "flat" ? "" : `<path class="iso-swatch-crease" d="M2 4.5 8 7.5 14 4.5"/>`;
        return `<svg class="iso-swatch" data-mark="${mark}" viewBox="0 0 16 10" aria-hidden="true"><path d="${body}"/>${crease}</svg>`;
    }
    return `<svg class="iso-swatch" data-mark="${mark}" viewBox="0 0 16 10" aria-hidden="true"><path d="M1.5 5h13"/></svg>`;
}
function plateHtml({ fig, title, hint, readout = "", keys = [], caption, body }) {
    const corner = (name, text, extra = "") => `<span class="iso-plate-corner" data-corner="${name}"${extra}>${escape(text)}</span>`;
    const legend = keys.length || caption
        ? `<figcaption class="iso-legend">${keys.length ? `<span class="iso-keys">${keys.map((key) => `<span class="iso-key">${swatchSvg(key.mark)}${escape(key.label)}</span>`).join("")}</span>` : ""}${caption ? `<span class="iso-caption">${escape(caption)}</span>` : ""}</figcaption>`
        : "";
    return `<figure class="iso-figure"><div class="iso-plate"><div class="iso-plate-corners" aria-hidden="true">${corner("fig", fig)}${title ? corner("title", title) : ""}${hint ? corner("hint", hint) : ""}${corner("readout", readout, " data-readout")}</div>${body}</div>${legend}</figure>`;
}
function pageHtml({ title, theme = "dark", body, script = "", width = 650 }) {
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)}</title><style>${ISO_CSS}${PAGE_CSS.replace("__WIDTH__", String(width))}</style></head><body class="iso" data-theme="${theme}"><main class="iso-page">${body}</main>${script ? `<script type="module">${script.replace(/<\/(script)/gi, "<\\/$1")}</script>` : ""}</body></html>`;
}
const PAGE_CSS = `
*{box-sizing:border-box}
html{color-scheme:dark}
body[data-theme="light"]{color-scheme:light}
body{margin:0;background:var(--anatomy-page);color:var(--anatomy-text);font:14px/1.6 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
.iso-page{width:min(__WIDTH__px,100% - 32px);margin:64px auto 96px}
`;
const ISO_CSS = `
.iso{
  --anatomy-page:#0b0b0b;--anatomy-card:#131313;--anatomy-text:#a3a3a3;--anatomy-strong:#e6e6e6;--anatomy-muted:#6e6e6e;
  --anatomy-paper:#131313;--anatomy-face:#1b1b1b;--anatomy-top:#1c1c1c;
  --anatomy-shade-0:#0f0f0f;--anatomy-shade-1:#121212;--anatomy-shade-2:#151515;--anatomy-shade-3:#181818;
  --anatomy-lit-top:#262626;--anatomy-lit-shade:#1d1d1d;
  --anatomy-hi:#d4d4d4;--anatomy-mid:#6a6a6a;--anatomy-lo:#3e3e3e;--anatomy-faint:#2a2a2a;--anatomy-lit:#ffffff;
  --anatomy-halo:#050505;--anatomy-halo-opacity:.9;--anatomy-dot:#e6e6e6;
  --anatomy-red:#ff6b6b;--anatomy-green:#6be0a0;--anatomy-blue:#6b9bff;
  --anatomy-weight:.6px;--anatomy-ease:cubic-bezier(.32,.72,0,1);
  --anatomy-mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
  --anatomy-lift:inset 0 1px 0 0 #ffffff0a,inset 0 0 0 1px #ffffff06,0 0 0 1px #00000026,0 1px 1px -.5px #00000014,0 3px 3px -1.5px #00000014,0 6px 6px -3px #00000014,0 12px 12px -6px #00000014;
}
.iso[data-theme="light"]{
  --anatomy-page:#f2f2ef;--anatomy-card:#fbfbfa;--anatomy-text:#57575a;--anatomy-strong:#18181a;--anatomy-muted:#8c8c90;
  --anatomy-paper:#fbfbfa;--anatomy-face:#ffffff;--anatomy-top:#ffffff;
  --anatomy-shade-0:#dcdcd9;--anatomy-shade-1:#e5e5e2;--anatomy-shade-2:#ededea;--anatomy-shade-3:#f4f4f1;
  --anatomy-lit-top:#ffffff;--anatomy-lit-shade:#eeeeeb;
  --anatomy-hi:#26262a;--anatomy-mid:#8a8a8f;--anatomy-lo:#b4b4b8;--anatomy-faint:#d4d4d6;--anatomy-lit:#000000;
  --anatomy-halo:#8a8a80;--anatomy-halo-opacity:.32;--anatomy-dot:#3a3a3e;
  --anatomy-red:#e5484d;--anatomy-green:#30a46c;--anatomy-blue:#3e63dd;
  --anatomy-lift:inset 0 1px 0 0 #ffffff,0 0 0 1px #0000000f,0 1px 1px -.5px #0000000a,0 3px 3px -1.5px #0000000a,0 6px 6px -3px #0000000a,0 12px 12px -6px #0000000a;
}
.iso-svg{display:block;width:100%;height:auto;overflow:visible}
.iso-svg path,.iso-svg circle{vector-effect:non-scaling-stroke}
.iso-fill{fill:var(--anatomy-paper);stroke:none}
.iso-solid[data-lit]>.iso-fill{fill:var(--anatomy-face)}
.iso-shade,.iso-top{stroke:none}
.iso-shade[data-shade="0"]{fill:var(--anatomy-shade-0)}
.iso-shade[data-shade="1"]{fill:var(--anatomy-shade-1)}
.iso-shade[data-shade="2"]{fill:var(--anatomy-shade-2)}
.iso-shade[data-shade="3"]{fill:var(--anatomy-shade-3)}
.iso-top{fill:var(--anatomy-top)}
.iso-solid[data-lit]>.iso-top{fill:var(--anatomy-lit-top)}
.iso-solid[data-lit]>.iso-shade{fill:var(--anatomy-lit-shade)}
.iso-solid[data-seamless]>.iso-shade,.iso-solid[data-seamless]>.iso-top{stroke-width:.4;stroke-linejoin:round}
.iso-solid[data-seamless]>.iso-shade[data-shade="0"]{stroke:var(--anatomy-shade-0)}
.iso-solid[data-seamless]>.iso-shade[data-shade="1"]{stroke:var(--anatomy-shade-1)}
.iso-solid[data-seamless]>.iso-shade[data-shade="2"]{stroke:var(--anatomy-shade-2)}
.iso-solid[data-seamless]>.iso-shade[data-shade="3"]{stroke:var(--anatomy-shade-3)}
.iso-solid[data-seamless]>.iso-top{stroke:var(--anatomy-top)}
.iso-solid[data-seamless][data-lit]>.iso-top{stroke:var(--anatomy-lit-top)}
.iso-solid[data-seamless][data-lit]>.iso-shade{stroke:var(--anatomy-lit-shade)}
.iso-solid[data-lit]>.iso-edge{stroke:var(--anatomy-lit)}
.iso-halo{fill:var(--anatomy-halo);stroke:none;filter:blur(9px);opacity:var(--anatomy-halo-opacity);transform:translateY(3px)}
.iso-line{fill:none;stroke:var(--anatomy-lo);stroke-width:var(--anatomy-weight);stroke-linecap:round;stroke-linejoin:round}
.iso-line[data-tone="hi"]{stroke:var(--anatomy-hi)}
.iso-line[data-tone="mid"]{stroke:var(--anatomy-mid)}
.iso-line[data-tone="lo"]{stroke:var(--anatomy-lo)}
.iso-line[data-tone="faint"]{stroke:var(--anatomy-faint)}
.iso-line[data-tone="lit"]{stroke:var(--anatomy-lit)}
.iso-line[data-tone="red"]{stroke:var(--anatomy-red)}
.iso-line[data-tone="green"]{stroke:var(--anatomy-green)}
.iso-line[data-tone="blue"]{stroke:var(--anatomy-blue)}
.iso-line[data-dotted]{stroke-dasharray:.01 3.5;stroke-width:1}
.iso-line[data-dashed]{stroke-dasharray:3 3}
.iso-line[data-flow]{stroke-dasharray:2 6}
.iso-wire-end{fill:var(--anatomy-paper);stroke:var(--anatomy-lo);stroke-width:var(--anatomy-weight)}
.iso-wire[data-tone="hi"] .iso-wire-end{stroke:var(--anatomy-hi)}
.iso-wire[data-tone="mid"] .iso-wire-end{stroke:var(--anatomy-mid)}
.iso-wire[data-tone="faint"] .iso-wire-end{stroke:var(--anatomy-faint)}
.iso-wire[data-tone="lit"] .iso-wire-end{stroke:var(--anatomy-lit)}
.iso-dots circle{fill:var(--anatomy-dot);stroke:none;opacity:.32}
.iso-dots[data-tone="hi"] circle{opacity:.85}
.iso-dots[data-tone="mid"] circle{opacity:.45}
.iso-dots[data-tone="lo"] circle{opacity:.22}
.iso-dots[data-tone="faint"] circle{opacity:.12}
.iso-face-text{fill:var(--anatomy-mid);font-family:var(--anatomy-mono);letter-spacing:.04em}
.iso-face-text[data-tone="hi"]{fill:var(--anatomy-hi)}
.iso-face-text[data-tone="lo"]{fill:var(--anatomy-lo)}
.iso-face-text[data-tone="faint"]{fill:var(--anatomy-faint)}
.tb-body{fill:var(--anatomy-shade-2);stroke:none}
.tb-shine{fill:var(--anatomy-top);stroke:none}
.tb-shade{fill:var(--anatomy-shade-0);stroke:none}
.tb-ring{fill:none;stroke:var(--anatomy-lo);stroke-width:.45;stroke-linecap:butt;stroke-linejoin:round}
.tb-ring[data-tone="mid"]{stroke:var(--anatomy-mid)}
.tb-ring[data-tone="faint"]{stroke:var(--anatomy-faint)}
.tb-ring[data-tone="hi"]{stroke:var(--anatomy-hi)}
@keyframes iso-flow{to{stroke-dashoffset:-32}}
@keyframes iso-pulse{0%,100%{opacity:.18}12%{opacity:1}40%{opacity:.18}}
.iso-line[data-flow]{animation:iso-flow 1600ms linear infinite}
.iso-dots circle[data-pulse]{animation:iso-pulse 1600ms steps(1,end) infinite;animation-delay:var(--pulse-at,0ms)}
.iso-figure{margin:32px 0 36px}
.iso-plate{position:relative;padding:52px 24px;border-radius:0;background:var(--anatomy-card);box-shadow:0 0 0 1px var(--anatomy-mid);--anatomy-paper:var(--anatomy-card)}
.iso-plate-corners{position:absolute;inset:18px 20px;pointer-events:none}
.iso-plate-corner{position:absolute;color:var(--anatomy-muted);font-family:var(--anatomy-mono);font-size:10.5px;line-height:1;letter-spacing:.04em;white-space:nowrap}
.iso-plate-corner[data-corner="fig"]{top:0;left:0;color:var(--anatomy-text)}
.iso-plate-corner[data-corner="title"]{top:0;right:0;text-transform:uppercase;letter-spacing:.1em}
.iso-plate-corner[data-corner="hint"]{bottom:0;left:0;text-transform:uppercase;letter-spacing:.1em}
.iso-plate-corner[data-corner="readout"]{right:0;bottom:0;color:var(--anatomy-text);font-variant-numeric:tabular-nums}
.iso-plate .iso-svg{margin:0 auto}
.iso-legend{display:grid;gap:8px;margin-top:12px;color:var(--anatomy-muted);font-size:13px;line-height:1.55}
.iso-keys{display:flex;flex-wrap:wrap;gap:6px 18px}
.iso-key{display:inline-flex;align-items:center;gap:7px}
.iso-swatch{width:16px;height:10px;flex:none;overflow:visible}
.iso-swatch path{fill:none;stroke:var(--anatomy-hi);stroke-width:1;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}
.iso-swatch[data-mark="raised"] path,.iso-swatch[data-mark="flat"] path{stroke:var(--anatomy-mid)}
.iso-swatch[data-mark="lit"] path{stroke:var(--anatomy-lit)}
.iso-swatch[data-mark="dim"] path{stroke:var(--anatomy-lo)}
.iso-swatch[data-mark="dotted"] path{stroke-dasharray:.01 3;stroke-width:1.4}
.iso-swatch[data-mark="dashed"] path{stroke-dasharray:3 2.5}
.iso-swatch[data-mark="red"] path{stroke:var(--anatomy-red)}
.iso-swatch[data-mark="green"] path{stroke:var(--anatomy-green)}
.iso-swatch[data-mark="blue"] path{stroke:var(--anatomy-blue)}
.iso-swatch-crease{stroke:var(--anatomy-lo)!important}
@media (max-width:560px){.iso-plate{padding:48px 12px 70px}.iso-plate-corner[data-corner="hint"]{bottom:18px}}
@media (prefers-reduced-motion:reduce){.iso-line[data-flow],.iso-dots circle[data-pulse]{animation:none}}
`;

const P = {"origin":[1475.7533392835112,603.8999943744722],"scale":2.7030973913828027,"azimuth":45,"elevation":14};
const WHEEL = {"o":[2.8284271247461903,2.8284271247461903,104],"a":[0.8651243083637565,0.5015575052555107,0],"u":[0,0,1],"v":[-0.5015575052555107,0.8651243083637565,0]};
const WW = {"o":[288.4995667241114,-268.70057685088807,-10],"a":[0.9934403935008369,-0.11435114586615397,0],"u":[0,0,1],"v":[0.11435114586615397,0.9934403935008369,0]};
const WHEEL_R = 66, RIM_S = 11, CARS = 8, WW_R = 22;
const TAU = Math.PI * 2;
const pointOf = (F, s, r, a) => [F.o[0] + F.a[0] * s + (F.u[0] * Math.cos(a) + F.v[0] * Math.sin(a)) * r, F.o[1] + F.a[1] * s + (F.u[1] * Math.cos(a) + F.v[1] * Math.sin(a)) * r, F.o[2] + F.a[2] * s + (F.u[2] * Math.cos(a) + F.v[2] * Math.sin(a)) * r];
const P2 = (pts) => pts.map((p) => iso(p, P)).map(([x, y], i) => (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1)).join("");
const stage = document.querySelector(".station-anatomy");
const svg = stage;
const DUMMY = () => document.createElementNS("http://www.w3.org/2000/svg", "path");
const _q = svg.querySelector.bind(svg);
svg.querySelector = (sel) => _q(sel) || DUMMY();
const cars = [...svg.querySelectorAll('[data-part="car"]')];
const spokesBack = svg.querySelector('[data-part="spokes-back"]');
const spokesFront = svg.querySelector('[data-part="spokes-front"]');
const braces = svg.querySelector('[data-part="braces"]');
const paddles = svg.querySelector('[data-part="paddles"] path');
const readout = document.createElement("span");
const still = matchMedia("(prefers-reduced-motion: reduce)");
const NAMES = ["model A", "model B", "model C", "model D", "model E", "model F", "model G", "model H"];
const spokes = (angle, s) => { let d = ""; for (let i = 0; i < 16; i++) { const t = angle + (i / 16) * TAU; d += P2([pointOf(WHEEL, s, 7.4, t), pointOf(WHEEL, s, WHEEL_R, t)]); } return d; };
const bracesAt = (angle) => { let d = ""; for (let i = 0; i < 16; i++) { const t = angle + (i / 16) * TAU; d += P2([pointOf(WHEEL, -RIM_S, 62, t), pointOf(WHEEL, RIM_S, 62, t + TAU / 16)]); } return d; };
const paddlesAt = (angle) => { let d = ""; for (let i = 0; i < 12; i++) { const t = angle + (i / 12) * TAU; d += P2([pointOf(WW, -5, WW_R * 0.35, t), pointOf(WW, -5, WW_R, t), pointOf(WW, 5, WW_R, t), pointOf(WW, 5, WW_R * 0.35, t)]) + "Z"; } return d; };

const PS = {"yellow":"--anatomy-paper:#ecb23a;--anatomy-face:#ecb23a;--anatomy-top:#fff3c8;--anatomy-shade-3:#f5cf7a;--anatomy-shade-2:#ecb23a;--anatomy-shade-1:#c38e27;--anatomy-shade-0:#9a6a14;--anatomy-lit-top:#fff7db;--anatomy-lit-shade:#f9e09d","teal":"--anatomy-paper:#98dfd2;--anatomy-face:#98dfd2;--anatomy-top:#e8f7f6;--anatomy-shade-3:#bceae2;--anatomy-shade-2:#98dfd2;--anatomy-shade-1:#6fccbd;--anatomy-shade-0:#45b8a7;--anatomy-lit-top:#f0faf9;--anatomy-lit-shade:#d0f0eb","purple":"--anatomy-paper:#7f70cf;--anatomy-face:#7f70cf;--anatomy-top:#a394ea;--anatomy-shade-3:#8f80db;--anatomy-shade-2:#7f70cf;--anatomy-shade-1:#6d5ec0;--anatomy-shade-0:#5b4bb0;--anatomy-lit-top:#c3b9f1;--anatomy-lit-shade:#9889e2","cream":"--anatomy-paper:#fbf3df;--anatomy-face:#fbf3df;--anatomy-top:#fffbf0;--anatomy-shade-3:#fdf7e7;--anatomy-shade-2:#fbf3df;--anatomy-shade-1:#f3e6c9;--anatomy-shade-0:#ead9b2;--anatomy-lit-top:#fffcf5;--anatomy-lit-shade:#fef9eb","slate":"--anatomy-paper:#3a3180;--anatomy-face:#3a3180;--anatomy-top:#4a4566;--anatomy-shade-3:#413a74;--anatomy-shade-2:#3a3180;--anatomy-shade-1:#332b70;--anatomy-shade-0:#2b2460;--anatomy-lit-top:#89869c;--anatomy-lit-shade:#453f6e"};
const PAINT = (k, svg) => '<g style="' + PS[k] + '">' + svg + '</g>';
const GBX = {"RAMP_A":[-230.5168106668145,222.00411229460641,15],"RAMP_B":[-230.5168106668145,251.10325797013908,6.2702562973402],"V":[0,-0.28734788556634544,-0.9578262852211514],"SPAWN":[-188.5168106668145,252.00411229460644,6],"CRANK_C":[-206.31681066681452,197.40411229460642,40],"CRANK_R":8};
const CABX = {"x":172.5340546095176,"y":-209.30360723121808,"hx":16,"hy":20,"top":128,"ROW_H":23.6,"rowZ":100.4,"y0":-208.30360723121808,"D":17.5};
const MASTX = {"x":214.96046148071045,"y":-240.41630560342617,"top":160};
const TABLEX = {"x":255.97265478953022,"y":-199.40411229460642,"z":16};
const ease = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
const span = (t, a, b) => ease((t - a) / (b - a));
const lerp = (a, b, f) => a + (b - a) * f;
const lerp3 = (a, b, f) => [lerp(a[0], b[0], f), lerp(a[1], b[1], f), lerp(a[2], b[2], f)];
// ---- dispenser, belt and labelling press
const newborn = null;
const tagEl = svg.querySelector('[data-part="tag"]');
const crankArm = svg.querySelector('[data-part="crank-arm"]');
const crankKnob = svg.querySelector('[data-part="crank-knob"]');
const beacon = svg.querySelector('[data-part="beacon"] .iso-solid');
const gumballs = [...svg.querySelectorAll('[data-part="gumball"]')];
const beltEl = svg.querySelector('[data-part="belt"]');
const pressEl = svg.querySelector('[data-part="press"]');
const BELT = {"x0":-238.5168106668145,"x1":-178.5168106668145,"y0":244.00411229460641,"y1":260.00411229460644,"top":6,"yc":252.00411229460644,"sx":-210.5168106668145};
const BALL_C = [GBX.SPAWN[0], GBX.SPAWN[1], BELT.top + 8.5];
const ROLES = ["Researcher", "Writer", "Reviewer", "Coder", "Planner"];
const knobAt = (a) => [GBX.CRANK_C[0] + 3, GBX.CRANK_C[1] + Math.cos(a) * GBX.CRANK_R, GBX.CRANK_C[2] + Math.sin(a) * GBX.CRANK_R];
const knobHome = knobAt(0);
let spawned = 2, spawnShown = -1, beltPhase = 0;
function beltLines(phase) {
  let d = "";
  for (let i = 0; i < 16; i++) { const x = BELT.x0 + 1 + ((i * 3.8 + phase) % (BELT.x1 - BELT.x0 - 2)); d += P2([[x, BELT.y0 + 2, BELT.top], [x, BELT.y1 - 2, BELT.top]]); }
  return d;
}
function dispenser(t, dt) {
  const T = 8.2, c = t % T, cycle = Math.floor(t / T);
  const turn = span(c, 0, 1.2) * TAU;
  const kp = knobAt(turn);
  crankArm.setAttribute("d", P2([[GBX.CRANK_C[0] + 2.2, GBX.CRANK_C[1], GBX.CRANK_C[2]], kp]));
  crankKnob.setAttribute("transform", translateAlong(P, [kp[0] - knobHome[0], kp[1] - knobHome[1], kp[2] - knobHome[2]]));
  const shake = c < 1.2 ? Math.sin(c * 30) * 0.5 : 0;
  gumballs.forEach((g, i) => g.setAttribute("transform", translateAlong(P, [0, 0, shake * ((i % 3) - 1)])));
  const small = 0.55, r0 = 8.5 * small;
  const lift = (r) => [GBX.V[0] * (0.8 + r), GBX.V[1] * (0.8 + r), GBX.V[2] * (0.8 + r)];
  const onBelt = (x, r) => [x, BELT.yc, BELT.top + r];
  let pos = BALL_C, sc = 1, op = 0, moving = false;
  const xs = BELT.sx, xEnd = GBX.SPAWN[0];
  if (c >= 1.2 && c < 2.2) { sc = small; op = span(c, 1.2, 1.35); const f = span(c, 1.2, 2.2); const l = lift(r0); pos = lerp3([GBX.RAMP_A[0] + l[0], GBX.RAMP_A[1] + l[1], GBX.RAMP_A[2] + l[2]], [GBX.RAMP_B[0] + l[0], GBX.RAMP_B[1] + l[1], GBX.RAMP_B[2] + l[2]], f); }
  else if (c >= 2.2 && c < 3.4) { sc = small; op = 1; moving = true; pos = onBelt(lerp(GBX.RAMP_B[0], xs, span(c, 2.2, 3.4)), r0); }
  else if (c >= 3.4 && c < 4.4) { sc = small; op = 1; pos = onBelt(xs, r0); }
  else if (c >= 4.4 && c < 5.4) { sc = small; op = 1; moving = true; pos = onBelt(lerp(xs, xEnd, span(c, 4.4, 5.4)), r0); }
  else if (c >= 5.4) { const g = span(c, 5.4, 5.9); sc = lerp(small, 1, g); op = 1 - span(c, 7.5, 8.1); pos = onBelt(xEnd, 8.5 * sc); }
  if (moving && !still.matches) beltPhase = (beltPhase + dt * 22) % 100;
  beltEl.setAttribute("d", beltLines(beltPhase));
  // press: the head comes down onto the agent and leaves a name tag
  const down = span(c, 3.5, 3.8) - span(c, 4.0, 4.3);
  const headZ = lerp(24, BELT.top + 2 * r0 + 0.4, down);
  pressEl.innerHTML = PAINT("purple", solidSvg(cylinder(BELT.sx, BELT.yc, 1, headZ + 3, 37 - headZ - 3, P, 12), { tone: "hi", crease: "none", lit: down > 0.02 }) + solidSvg(cylinder(BELT.sx, BELT.yc, 4.2, headZ, 3, P, 28, 0.4), { tone: "hi", crease: "lo", lit: down > 0.02 }));
  tagEl.style.opacity = (c >= 3.9 ? 1 : 0).toString();
  const p0 = iso(BALL_C, P), p1 = iso(pos, P);
  newborn.setAttribute("transform", "translate(" + p1[0].toFixed(2) + " " + p1[1].toFixed(2) + ") scale(" + sc.toFixed(3) + ") translate(" + (-p0[0]).toFixed(2) + " " + (-p0[1]).toFixed(2) + ")");
  newborn.style.opacity = op.toFixed(3);
  const glow = c >= 1.2 && c < 2.2;
  if (beacon) glow ? beacon.setAttribute("data-lit", "") : beacon.removeAttribute("data-lit");
  if (c >= 4.0 && spawnShown !== cycle) { spawnShown = cycle; spawned++; say("agent #" + spawned + " gets its name tag: " + ROLES[spawned % ROLES.length]); }
}

// ---- train station
const LCX = {"x":-212.13203435596427,"y":212.13203435596427,"R":68,"VX":0.6861026878060833,"VY":0.6861026878060832,"VZ":0.24192189559966773};
const trainBack = svg.querySelector('[data-part="train-back"]');
const trainFront = svg.querySelector('[data-part="train-front"]');
const flapRows = [...svg.querySelectorAll('[data-part="flap-row"] text')];
const hands = [...svg.querySelectorAll('[data-part="clock-hands"]')];
const semaphore = svg.querySelector('[data-part="semaphore"]');
const sigLamp = svg.querySelector('[data-part="signal-lamp"] .iso-solid');
const waiting = [...svg.querySelectorAll('[data-part="waiting"] use')];
const smokeEl = svg.querySelector('[data-part="smoke"]');
const PSX = {"green":"--anatomy-paper:#6fbf52;--anatomy-face:#6fbf52;--anatomy-top:#a9e08f;--anatomy-shade-3:#89ce6d;--anatomy-shade-2:#6fbf52;--anatomy-shade-1:#5ead44;--anatomy-shade-0:#4d9a36;--anatomy-lit-top:#c7ebb6;--anatomy-lit-shade:#98d67d","red":"--anatomy-paper:#f2bf48;--anatomy-face:#f2bf48;--anatomy-top:#fde7a6;--anatomy-shade-3:#f7d172;--anatomy-shade-2:#f2bf48;--anatomy-shade-1:#dea733;--anatomy-shade-0:#c98f1e;--anatomy-lit-top:#feefc5;--anatomy-lit-shade:#fadb8a","slate":"--anatomy-paper:#3a3180;--anatomy-face:#3a3180;--anatomy-top:#4a4566;--anatomy-shade-3:#413a74;--anatomy-shade-2:#3a3180;--anatomy-shade-1:#332b70;--anatomy-shade-0:#2b2460;--anatomy-lit-top:#89869c;--anatomy-lit-shade:#453f6e","yellow":"--anatomy-paper:#ecb23a;--anatomy-face:#ecb23a;--anatomy-top:#fff3c8;--anatomy-shade-3:#f5cf7a;--anatomy-shade-2:#ecb23a;--anatomy-shade-1:#c38e27;--anatomy-shade-0:#9a6a14;--anatomy-lit-top:#fff7db;--anatomy-lit-shade:#f9e09d","purple":"--anatomy-paper:#a394ea;--anatomy-face:#a394ea;--anatomy-top:#d3cbf8;--anatomy-shade-3:#b9adf0;--anatomy-shade-2:#a394ea;--anatomy-shade-1:#9182dd;--anatomy-shade-0:#7f70cf;--anatomy-lit-top:#e2ddfa;--anatomy-lit-shade:#c5bbf4","teal":"--anatomy-paper:#45b8a7;--anatomy-face:#45b8a7;--anatomy-top:#98dfd2;--anatomy-shade-3:#6acaba;--anatomy-shade-2:#45b8a7;--anatomy-shade-1:#39a494;--anatomy-shade-0:#2c8f80;--anatomy-lit-top:#bceae2;--anatomy-lit-shade:#7fd3c5","gold":"--anatomy-paper:#ecb23a;--anatomy-face:#ecb23a;--anatomy-top:#fff3c8;--anatomy-shade-3:#f5cf7a;--anatomy-shade-2:#ecb23a;--anatomy-shade-1:#c38e27;--anatomy-shade-0:#9a6a14;--anatomy-lit-top:#fff7db;--anatomy-lit-shade:#f9e09d"};
const PX = (k2, svg2) => '<g style="' + PSX[k2] + '">' + svg2 + '</g>';
const KS2 = 3.4191777976117037;
const ROLES2 = ["RESEARCHER", "WRITER", "REVIEWER", "CODER", "PLANNER", "ANALYST", "DESIGNER"];
const MODELS2 = ["MODEL A", "MODEL B", "MODEL C", "MODEL D"];
const DELTA = 16 / LCX.R;
const TH_STOP = Math.PI / 2 + DELTA * 1.15;
const wagonIds = [11, 14, 2];
let boardCycle = -1, flipStart = -10, boardRows = ["09:41  RESEARCHER  P1", "09:44  WRITER      P1", "09:50  REVIEWER    P1"], arrivals = 0;
const dep = (p) => p[0] * LCX.VX + p[1] * LCX.VY + p[2] * LCX.VZ;
function box(c, th, len, wid, z, h, key) {
  const t = [-Math.sin(th), Math.cos(th)], n = [Math.cos(th), Math.sin(th)];
  const ring = [[-len / 2, -wid / 2], [len / 2, -wid / 2], [len / 2, wid / 2], [-len / 2, wid / 2]].map(([a, b]) => [c[0] + t[0] * a + n[0] * b, c[1] + t[1] * a + n[1] * b]);
  return PX(key, solidSvg(extrude(ring, z, h, P, { bevel: 0.3 }), { tone: "mid" }));
}
function carSvg(kind, th, id) {
  const c = [LCX.x + LCX.R * Math.cos(th), LCX.y + LCX.R * Math.sin(th)];
  const t = [-Math.sin(th), Math.cos(th)];
  const off = (a) => [c[0] + t[0] * a, c[1] + t[1] * a];
  let s2 = box(c, th, 15, 8, 2, 2.4, "slate");
  if (kind === "loco") {
    s2 += box(off(-5), th, 5, 8.4, 4.4, 9.6, "green");
    s2 += box(off(-5), th, 6.4, 9.4, 14, 1.2, "red");
    s2 += box(off(1.5), th, 8, 6.4, 4.4, 6.4, "green");
    s2 += box(off(6), th, 2, 6.6, 4.4, 6.6, "slate");
    s2 += box(off(7.6), th, 1, 8.4, 2.2, 2.4, "red");
    const ch = off(5.5), dm = off(1);
    s2 += PX("slate", solidSvg(cylinder(ch[0], ch[1], 1.3, 10.8, 5.4, P, 14, 0.3), { tone: "mid" }));
    s2 += PX("slate", solidSvg(cylinder(ch[0], ch[1], 1.9, 15.6, 1, P, 14, 0.3), { tone: "mid" }));
    s2 += PX("gold", solidSvg(cylinder(dm[0], dm[1], 1.6, 10.8, 2, P, 14, 0.3), { tone: "hi" }));
    s2 += PX("gold", solidSvg(cylinder(off(-1.4)[0], off(-1.4)[1], 1, 10.8, 1.6, P, 12, 0.2), { tone: "hi" }));
    const lamp = iso([off(7.4)[0], off(7.4)[1], 8.6], P);
    s2 += '<circle cx="' + lamp[0].toFixed(1) + '" cy="' + lamp[1].toFixed(1) + '" r="1.1" style="fill:#ffe9b0;stroke:#2b2460;stroke-width:.5"/>';
  } else {
    s2 += box(c, th, 13, 8, 4.4, 4, ["purple", "teal", "gold"][kind]);
    const q = iso([c[0], c[1], 8.4 + 5], P);
    const size = 5.4 * 2.7 * KS2;
    s2 += '<use href="#av-' + id + '" x="' + (q[0] - size / 2).toFixed(1) + '" y="' + (q[1] - size / 2).toFixed(1) + '" width="' + size.toFixed(1) + '" height="' + size.toFixed(1) + '"/>';
  }
  return { svg: s2, key: dep([c[0], c[1], 0]), front: Math.cos(th) * LCX.VX + Math.sin(th) * LCX.VY > -0.05 };
}
function scramble(text, f) { const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; return text.split("").map((ch, i) => ch === " " || f > (i / text.length) * 0.8 + 0.2 ? ch : A[Math.floor(Math.random() * A.length)]).join(""); }
function station(t, dt) {
  // the train never stops: one lap every 12 s
  const th = TH_STOP + TAU * (t / 12);
  const dwell = false;
  // cars: loco and three wagons
  const parts = [carSvg("loco", th, 0), carSvg(0, th - DELTA, wagonIds[0]), carSvg(1, th - 2 * DELTA, wagonIds[1]), carSvg(2, th - 3 * DELTA, wagonIds[2])];
  // steam from the loco chimney
  const tt = [-Math.sin(th), Math.cos(th)];
  const chim = [LCX.x + LCX.R * Math.cos(th) + tt[0] * 5.5, LCX.y + LCX.R * Math.sin(th) + tt[1] * 5.5, 17];
  let steam = "";
  for (let i = 0; i < 5; i++) {
    const age = ((t * (dwell ? 0.35 : 0.9)) + i / 5) % 1;
    const p = iso([chim[0] - tt[0] * age * 10, chim[1] - tt[1] * age * 10, chim[2] + age * 14], P);
    steam += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' + ((1.2 + age * 3.4) * KS2).toFixed(1) + '" style="fill:#fffbf0;stroke:#c9c3dc;stroke-width:.5;opacity:' + (0.9 * (1 - age)).toFixed(2) + '"/>';
  }
  parts[0].svg += steam;
  parts.sort((a, b) => a.key - b.key);
  trainBack.innerHTML = parts.filter((x) => !x.front).map((x) => x.svg).join("");
  trainFront.innerHTML = parts.filter((x) => x.front).map((x) => x.svg).join("");
  // semaphore: arm up when the line is clear, level while the train stands
  const up = 1;
  const ang = up * 0.8;
  if (semaphore) { const sx = +semaphore.dataset.x, sy = +semaphore.dataset.y;
  semaphore.setAttribute("d", P2([[sx + 1, sy + 1, 33], [sx + 1 + Math.cos(ang) * 7 * 0.707, sy + 1 - Math.cos(ang) * 7 * 0.707, 33 + Math.sin(ang) * 7]])); }
  if (sigLamp) (up < 0.5 ? sigLamp.setAttribute("data-lit", "") : sigLamp.removeAttribute("data-lit"));
  // the tower clock keeps real time
  const now = new Date(); const mins = now.getMinutes() + now.getSeconds() / 60; const hrs = (now.getHours() % 12) + mins / 60;
  hands.forEach((h) => {
    const o = h.dataset.o.split(",").map(Number), u = h.dataset.u.split(",").map(Number);
    const tip = (a, len) => [o[0] + u[0] * Math.sin(a) * len, o[1] + u[1] * Math.sin(a) * len, o[2] + Math.cos(a) * len];
    h.setAttribute("d", P2([o, tip((mins / 60) * TAU, 4.4)]) + P2([o, tip((hrs / 12) * TAU, 2.8)]));
  });
}
// ---- ambience: pebbles from the tips, crystals glinting, chimney smoke
const pebbleEls = [...svg.querySelectorAll('[data-part="pebbles"]')];
const crystalEls = [...svg.querySelectorAll('[data-part="crystal"] .iso-solid')];
function ambience(t) {
  pebbleEls.forEach((g, j) => {
    const x = +g.dataset.x, y = +g.dataset.y, z = +g.dataset.z;
    let d = "";
    for (let i = 0; i < 3; i++) {
      const age = (t * 0.32 + i / 3 + j * 0.21) % 1;
      const p = iso([x + Math.sin(i * 2 + j) * 2.5, y + Math.cos(i * 3) * 2.5, z - age * age * 70], P);
      d += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' + (0.7 + (i % 2) * 0.4) * KS2 + '" style="fill:#86664a;opacity:' + (1 - age).toFixed(2) + '"/>';
    }
    g.innerHTML = d;
  });
  const glint = Math.floor(t * 1.6) % Math.max(1, crystalEls.length);
  crystalEls.forEach((c2, i) => (i === glint ? c2.setAttribute("data-lit", "") : c2.removeAttribute("data-lit")));
  if (smokeEl) {
    const x = +smokeEl.dataset.x, y = +smokeEl.dataset.y;
    let d = "";
    for (let i = 0; i < 5; i++) { const age = (t * 0.25 + i / 5) % 1; const p = iso([x + age * 6, y - age * 3, 44 + age * 22], P); d += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' + ((1.4 + age * 3.6) * KS2).toFixed(1) + '" style="fill:#fffbf0;stroke:#c9c3dc;stroke-width:.5;opacity:' + (0.85 * (1 - age)).toFixed(2) + '"/>'; }
    smokeEl.innerHTML = d;
  }
}

// ---- grass in the wind
const grassGroups = [...svg.querySelectorAll('[data-part="grass-live"]')].map((g) => ({ blades: JSON.parse(g.dataset.blades), paths: [...g.querySelectorAll("path")] }));
let grassFrame = 0;
function grass(t) {
  if ((grassFrame++ & 1) && t > 0.1) return;
  for (const g of grassGroups) {
    const d = g.paths.map(() => []);
    for (const [bx, by, h, w, lean, c] of g.blades) {
      const gust = Math.sin(t * 1.7 + bx * 0.045) * 0.7 + Math.sin(t * 0.6 + bx * 0.012 + by * 0.02) * 0.9;
      const tx = bx + lean + gust * Math.abs(h) * 0.28, ty = by - h * (1 - Math.abs(gust) * 0.04);
      d[c].push("M" + (bx - w).toFixed(1) + " " + by.toFixed(1) + "Q" + (bx + (tx - bx) * 0.4).toFixed(1) + " " + (by - h * 0.6).toFixed(1) + " " + tx.toFixed(1) + " " + ty.toFixed(1) + "Q" + (bx + (tx - bx) * 0.3 + w * 0.4).toFixed(1) + " " + (by - h * 0.5).toFixed(1) + " " + (bx + w).toFixed(1) + " " + by.toFixed(1) + "Z");
    }
    g.paths.forEach((p, i) => p.setAttribute("d", d[i].join("")));
  }
}
// ---- quota gauges and the red lamp
const needles = [...svg.querySelectorAll('[data-part="needle"]')];
const redLamp = svg.querySelector('[data-part="red-lamp"]');
const DIALS = [[-27.64213562373095,51.9685424949238],[-18.64213562373095,51.9685424949238],[-9.642135623730951,51.9685424949238],[-0.642135623730951,51.9685424949238],[-27.64213562373095,61.1685424949238],[-18.64213562373095,61.1685424949238],[-9.642135623730951,61.1685424949238],[-0.642135623730951,61.1685424949238]];
const GZ = 19.2;
const quota = Array.from({ length: CARS }, (_, i) => 0.55 + 0.45 * ((i * 37) % 10) / 10);
let warned = -1;
function gauges(dt, top) {
  for (let i = 0; i < CARS; i++) quota[i] = i === top ? Math.max(0.04, quota[i] - dt * 0.13) : Math.min(1, quota[i] + dt * 0.035);
  needles.forEach((n) => { const i = +n.dataset.i; const [x, y] = DIALS[i]; const a = -2.3 + 4.6 * quota[i]; n.setAttribute("d", lineOnTop([x, y], [x + Math.sin(a) * 2.3, y - Math.cos(a) * 2.3], GZ, P)); n.setAttribute("data-tone", i === top ? "lit" : "hi"); });
  const low = quota[top] < 0.22;
  low ? redLamp.setAttribute("data-on", "") : redLamp.removeAttribute("data-on");
  if (low && warned !== top) { warned = top; say(NAMES[top] + " near its limit · red lamp on · next car takes over"); }
}
// ---- pneumatic capsule
const capsule = svg.querySelector('[data-part="capsule"]');
const PIPE = [[176.5340546095176,-189.30360723121808,104],[176.5340546095176,-184.62360723121807,104],[176.5340546095176,-183.61110723121809,103.9325],[176.5340546095176,-182.73360723121806,103.73],[176.5340546095176,-181.99110723121808,103.3925],[176.5340546095176,-181.3836072312181,102.92],[176.5340546095176,-180.91110723121807,102.3125],[176.5340546095176,-180.5736072312181,101.57000000000001],[176.5340546095176,-180.37110723121808,100.6925],[176.5340546095176,-180.30360723121808,99.68],[176.5340546095176,-180.30360723121808,40],[176.62714122165826,-180.29247416604386,38.59375],[176.90640105808026,-180.25907497052123,37.375],[177.3718341187836,-180.20340964465012,36.34375],[178.02344040376823,-180.12547818843058,35.5],[178.86121991303423,-180.02528060186262,34.84375],[179.88517264658157,-179.90281688494625,34.375],[181.09529860441017,-179.7580870376814,34.09375],[182.49159778652017,-179.59109106006815,34],[194.1536758987904,-178.19631824897337,34],[195.5499750809004,-178.02932227136012,33.90625],[196.76010103872903,-177.88459242409527,33.625],[197.78405377227634,-177.76212870717887,33.15625],[198.62183328154234,-177.66193112061092,32.5],[199.27343956652697,-177.5839996643914,31.65625],[199.7388726272303,-177.52833433852032,30.625],[200.0181324636523,-177.49493514299766,29.40625],[200.11121907579297,-177.48380207782344,28],[200.11121907579297,-177.48380207782344,21.4]];
const pipeLen = []; { let acc = 0; pipeLen.push(0); for (let i = 1; i < PIPE.length; i++) { acc += Math.hypot(PIPE[i][0] - PIPE[i - 1][0], PIPE[i][1] - PIPE[i - 1][1], PIPE[i][2] - PIPE[i - 1][2]); pipeLen.push(acc); } }
const alongPipe = (f) => { const target = f * pipeLen[pipeLen.length - 1]; let i = 1; while (i < PIPE.length - 1 && pipeLen[i] < target) i++; const u = (target - pipeLen[i - 1]) / Math.max(1e-6, pipeLen[i] - pipeLen[i - 1]); return lerp3(PIPE[i - 1], PIPE[i], Math.max(0, Math.min(1, u))); };
let tubeSaid = -1;
function pneumatic(t) {
  const T = 5.5, c = (t + 2) % T, cyc = Math.floor((t + 2) / T);
  const up = cyc % 2 === 0;
  const f = span(c, 0.4, 2.2);
  const p = alongPipe(up ? 1 - f : f);
  capsule.setAttribute("transform", translateAlong(P, [p[0] - PIPE[0][0], p[1] - PIPE[0][1], p[2] - PIPE[0][2]]));
  capsule.style.opacity = (c > 0.3 && c < 2.4 ? 1 : 0).toString();
  if (c > 0.4 && tubeSaid !== cyc) { tubeSaid = cyc; say(up ? "a note shoots up the tube to the archive" : "the archive sends a note down to the crew"); }
}
// ---- cable car
const gondola = null;
const CABLE = [[-233.3452377915607,145.6639969244288,128],[-229.03188642632276,140.502117421767,126.885],[-224.71853506108482,135.34023791910522,125.84],[-220.40518369584686,130.17835841644342,124.865],[-216.09183233060892,125.01647891378161,123.96],[-211.778480965371,119.8545994111198,123.125],[-207.46512960013305,114.69271990845802,122.36],[-203.15177823489512,109.53084040579623,121.665],[-198.83842686965716,104.36896090313442,121.03999999999999],[-194.52507550441925,99.20708140047262,120.485],[-190.21172413918129,94.04520189781083,120],[-185.89837277394335,88.88332239514902,119.585],[-181.58502140870542,83.72144289248723,119.24],[-177.27167004346748,78.55956338982543,118.965],[-172.95831867822955,73.39768388716364,118.76],[-168.64496731299158,68.23580438450185,118.625],[-164.33161594775365,63.07392488184004,118.56],[-160.0182645825157,57.91204537917825,118.565],[-155.70491321727778,52.75016587651645,118.64],[-151.39156185203984,47.58828637385466,118.785],[-147.07821048680188,42.42640687119285,119],[-142.76485912156394,37.26452736853105,119.285],[-138.451507756326,32.102647865869244,119.64],[-134.13815639108807,26.940768363207468,120.065],[-129.82480502585014,21.778888860545663,120.56],[-125.51145366061219,16.61700935788386,121.125],[-121.19810229537426,11.455129855222054,121.76],[-116.8847509301363,6.29325035256025,122.465],[-112.57139956489839,1.1313708498984738,123.24],[-108.25804819966044,-4.030508652763331,124.085],[-103.9446968344225,-9.192388155425107,125],[-99.63134546918454,-14.354267658086911,125.985],[-95.3179941039466,-19.516147160748716,127.04],[-91.00464273870867,-24.678026663410492,128.165],[-86.69129137347073,-29.839906166072296,129.35999999999999],[-82.3779400082328,-35.0017856687341,130.625],[-78.06458864299486,-40.163665171395905,131.96],[-73.7512372777569,-45.32554467405771,133.365],[-69.437885912519,-50.487424176719486,134.84],[-65.12453454728103,-55.64930367938129,136.385],[-60.811183182043095,-60.811183182043095,138],[-55.64930367938129,-65.12453454728103,136.385],[-50.48742417671949,-69.43788591251896,134.84],[-45.325544674057696,-73.7512372777569,133.365],[-40.1636651713959,-78.06458864299485,131.96],[-35.0017856687341,-82.37794000823278,130.625],[-29.839906166072304,-86.69129137347073,129.36],[-24.678026663410506,-91.00464273870867,128.165],[-19.51614716074871,-95.3179941039466,127.03999999999999],[-14.354267658086911,-99.63134546918454,125.985],[-9.192388155425114,-103.94469683442249,125],[-4.030508652763309,-108.25804819966044,124.085],[1.131370849898481,-112.57139956489837,123.24],[6.293250352560285,-116.8847509301363,122.465],[11.455129855222076,-121.19810229537424,121.76],[16.617009357883866,-125.51145366061218,121.125],[21.77888886054567,-129.82480502585014,120.56],[26.94076836320746,-134.13815639108807,120.065],[32.102647865869265,-138.451507756326,119.64],[37.264527368531056,-142.76485912156394,119.285],[42.42640687119286,-147.07821048680188,119],[47.588286373854665,-151.39156185203984,118.785],[52.75016587651647,-155.70491321727778,118.64],[57.912045379178245,-160.0182645825157,118.565],[63.07392488184005,-164.33161594775365,118.56],[68.23580438450185,-168.64496731299158,118.625],[73.39768388716365,-172.95831867822952,118.76],[78.55956338982546,-177.27167004346748,118.965],[83.72144289248723,-181.5850214087054,119.24],[88.88332239514904,-185.89837277394335,119.585],[94.04520189781081,-190.21172413918129,120],[99.20708140047262,-194.52507550441925,120.485],[104.36896090313442,-198.83842686965718,121.04],[109.5308404057962,-203.15177823489512,121.66499999999999],[114.692719908458,-207.46512960013305,122.36],[119.8545994111198,-211.778480965371,123.125],[125.01647891378161,-216.09183233060892,123.96000000000001],[130.17835841644342,-220.4051836958469,124.86500000000001],[135.3402379191052,-224.7185350610848,125.84],[140.502117421767,-229.03188642632276,126.885],[145.6639969244288,-233.3452377915607,128]];
const cabLen = []; { let acc = 0; cabLen.push(0); for (let i = 1; i < CABLE.length; i++) { acc += Math.hypot(CABLE[i][0] - CABLE[i - 1][0], CABLE[i][1] - CABLE[i - 1][1], CABLE[i][2] - CABLE[i - 1][2]); cabLen.push(acc); } }
const alongCable = (f) => { const target = f * cabLen[cabLen.length - 1]; let i = 1; while (i < CABLE.length - 1 && cabLen[i] < target) i++; const u = (target - cabLen[i - 1]) / Math.max(1e-6, cabLen[i] - cabLen[i - 1]); return lerp3(CABLE[i - 1], CABLE[i], Math.max(0, Math.min(1, u))); };
let rideSaid = -1;
function cablecar(t) {
  const T = 30, c = t % T, half = c < T / 2;
  const f = half ? span(c, 1.5, 13.5) : 1 - span(c, 16.5, 28.5);
  const p = alongCable(0.02 + 0.96 * f);
  const sway = Math.sin(t * 2.1) * (f > 0.02 && f < 0.98 ? 0.6 : 0);
  gondola.setAttribute("transform", translateAlong(P, [p[0] - CABLE[0][0], p[1] - CABLE[0][1] + sway, p[2] - CABLE[0][2]]));
  const leg = half ? 0 : 1;
  if (((half && c > 1.5) || (!half && c > 16.5)) && rideSaid !== Math.floor(t / (T / 2))) { rideSaid = Math.floor(t / (T / 2)); say(leg === 0 ? "cable car takes a new agent across to the crew" : "cable car heads back for the next agent"); }
}
// ---- archive drawer and crane
const drawerG = svg.querySelector('[data-part="drawer"]');
const craneG = svg.querySelector('[data-part="crane"]');
const S_ = (paths, style) => solidSvg(paths, style);
const fx0 = CABX.x + CABX.hx;
function drawerSvg(out) {
  const z0 = CABX.rowZ, H = CABX.ROW_H, y0 = CABX.y0, Dd = CABX.D;
  let s = "";
  if (out > 0.2) {
    s += S_(slabOf({ x: fx0 - 0.5, y: y0 + 0.6, w: out + 0.5, d: Dd - 1.2, r: 0.3 }, z0 + 1.6, H - 4.4, P, 2), { tone: "mid", crease: "none" });
    let lines = "";
    for (let i = 1; i < 6; i++) { const xx = fx0 + (out * i) / 6; if (xx < fx0 + 0.8) continue; lines += P2([[xx, y0 + 1.6, z0 + H - 2.8], [xx, y0 + Dd - 1.6, z0 + H - 2.8]]); }
    s += lineSvg(lines, { tone: "lo" });
  }
  const fx = fx0 + out;
  s += S_(slabOf({ x: fx, y: y0, w: 1.4, d: Dd, r: 0.4 }, z0 + 0.8, H - 1.6, P, 2, 0.3), { tone: "mid" });
  const yc = y0 + Dd / 2;
  s += lineSvg(P2([[fx + 1.45, yc - 5, z0 + H - 4], [fx + 1.45, yc + 5, z0 + H - 4], [fx + 1.45, yc + 5, z0 + H - 9], [fx + 1.45, yc - 5, z0 + H - 9]]) + "Z", { tone: "lo" });
  s += S_(slabOf({ x: fx + 1.4, y: yc - 4, w: 1.6, d: 8, r: 0.6 }, z0 + 5, 1.6, P, 2), { tone: "mid" });
  return s;
}
const MX = MASTX.x, MY = MASTX.y, MT = MASTX.top + 4.7;
const rect = (r0, r1, w, th) => { const c = Math.cos(th), s = Math.sin(th); return [[r0, -w], [r1, -w], [r1, w], [r0, w]].map(([a, b]) => [MX + a * c - b * s, MY + a * s + b * c]); };
const cardRing = (x, y, th) => { const c = Math.cos(th), s = Math.sin(th); return [[-4, -3], [4, -3], [4, 3], [-4, 3]].map(([a, b]) => [x + a * c - b * s, y + a * s + b * c]); };
const pickXY = [fx0 + 14 + 3.5, CABX.y0 + CABX.D / 2];
const dropXY = [TABLEX.x + 2, TABLEX.y - 4];
const polar = ([x, y]) => [Math.atan2(y - MY, x - MX), Math.hypot(x - MX, y - MY)];
const [thA, rA] = polar(pickXY), [thB0, rB] = polar(dropXY);
let thB = thB0; while (thB - thA > Math.PI) thB -= TAU; while (thB - thA < -Math.PI) thB += TAU;
const HIGH = MASTX.top - 22, Z_PICK = CABX.rowZ + CABX.ROW_H + 2.5, Z_DROP = TABLEX.z + 4.6;
let craneSaid = "";
function crane(t) {
  const T = 11, c = t % T;
  const move = span(c, 2.6, 5.4) - span(c, 7.6, 10.4);
  const th = lerp(thA, thB, move), rt = lerp(rA, rB, move);
  let hz = HIGH;
  hz = lerp(hz, Z_PICK, span(c, 0.5, 1.3) - span(c, 1.5, 2.4));
  hz = lerp(hz, Z_DROP, span(c, 5.5, 6.5) - span(c, 7.0, 7.6));
  const out = span(c, 0, 0.8) - span(c, 2.5, 3.3);
  drawerG.innerHTML = PAINT("teal", drawerSvg(out * 14));
  const carry = c >= 1.4 && c < 6.8;
  const onTable = c >= 6.8 && c < 10.8;
  const hx = MX + Math.cos(th) * rt, hy = MY + Math.sin(th) * rt;
  let s = "";
  if (onTable) s += '<g style="opacity:' + (1 - span(c, 10.2, 10.8)).toFixed(2) + '">' + PAINT("cream", S_(extrude(cardRing(dropXY[0], dropXY[1], th), TABLEX.z, 0.6, P), { tone: "hi", lit: true })) + "</g>";
  if (!carry && c < 1.4 && out > 0.6) s += S_(extrude(cardRing(hx, hy, th), Z_PICK - 3.2, 0.6, P), { tone: "hi", lit: true });
  // cable, hook block and the card it carries
  const tz = MT - 2.6;
  s += lineSvg(P2([[hx - Math.sin(th) * 1.2, hy + Math.cos(th) * 1.2, tz], [hx - Math.sin(th) * 1.2, hy + Math.cos(th) * 1.2, hz + 3]]) + P2([[hx + Math.sin(th) * 1.2, hy - Math.cos(th) * 1.2, tz], [hx + Math.sin(th) * 1.2, hy - Math.cos(th) * 1.2, hz + 3]]), { tone: "mid" });
  if (carry) {
    s += lineSvg(P2([[hx, hy, hz - 0.2], [hx, hy, hz - 2.2]]), { tone: "mid" });
    s += S_(extrude(cardRing(hx, hy, th), hz - 3.2, 0.6, P), { tone: "hi", lit: true });
  }
  s += PAINT("slate", S_(cylinder(hx, hy, 2.4, hz, 3.4, P, 20, 0.3), { tone: "mid" }));
  // trolley, boom, cab and counterweight
  s += S_(extrude(rect(rt - 3, rt + 3, 3.2, th), MT - 2.6, 2.6, P), { tone: "mid" });
  s += S_(extrude(rect(-18, 56, 2.6, th), MT, 3.6, P, { bevel: 0.4 }), { tone: "hi", crease: "lo" });
  let lat = "";
  for (let r = -14; r < 54; r += 6) { const a = [MX + Math.cos(th) * r, MY + Math.sin(th) * r]; const b = [MX + Math.cos(th) * (r + 6), MY + Math.sin(th) * (r + 6)]; const n = [-Math.sin(th) * 2.6, Math.cos(th) * 2.6]; lat += P2([[a[0] + n[0], a[1] + n[1], MT + 3.6], [b[0] - n[0], b[1] - n[1], MT + 3.6]]); }
  s += lineSvg(lat, { tone: "faint" });
  s += S_(extrude(rect(-18, -9, 4.4, th), MT + 3.6, 5.6, P, { bevel: 0.4 }), { tone: "mid" });
  s += S_(extrude(rect(-6, 3, 4.6, th), MT + 3.6, 6.6, P, { bevel: 0.4 }), { tone: "hi", crease: "lo" });
  craneG.innerHTML = PAINT("yellow", s);
  const said = c < 2.6 ? "crane pulls a note from the archive" : c < 6.8 ? "crane carries the note to the table" : "note filed on the crew's table";
  if (said !== craneSaid) { craneSaid = said; say(said); }
}
let lastSay = 0;
function say(text) { if (readout.textContent !== text) readout.textContent = text; lastSay = clockT; }
let clockT = 0, lastDt = 0;

const home = cars.map((_, i) => pointOf(WHEEL, 0, WHEEL_R, (i / CARS) * TAU));
let angle = 0, speed = 0.11, target = 0.11, wheel2 = 0, last = 0, frame = 0, visible = false, active = -1;
function topIndex() { let best = 0, bestZ = -1e9; for (let i = 0; i < CARS; i++) { const z = pointOf(WHEEL, 0, WHEEL_R, angle + (i / CARS) * TAU)[2]; if (z > bestZ) { bestZ = z; best = i; } } return best; }
function draw() {
  for (let i = 0; i < CARS; i++) {
    const p = pointOf(WHEEL, 0, WHEEL_R, angle + (i / CARS) * TAU);
    if (cars[i]) cars[i].setAttribute("transform", translateAlong(P, [p[0] - home[i][0], p[1] - home[i][1], p[2] - home[i][2]]));
  }
  spokesBack.setAttribute("d", spokes(angle, -RIM_S));
  spokesFront.setAttribute("d", spokes(angle, RIM_S));
  if (paddles) paddles.setAttribute("d", paddlesAt(wheel2));
  const top = topIndex();
  if (top !== active) {
    const prev = active; active = top;
    cars.forEach((c, i) => c.querySelectorAll(".iso-solid").forEach((s) => { if (s.closest('[data-part="car"]') === c && s.dataset.carLit !== undefined) {} }));
    cars.forEach((c, i) => c.querySelectorAll('[data-lit-able]').forEach((s) => i === top ? s.setAttribute("data-lit", "") : s.removeAttribute("data-lit")));
    const text = "car " + (top + 1) + " at the top · " + NAMES[top] + " working" + (prev >= 0 ? " · " + NAMES[prev] + " handed off" : "");
    say(text);
  }
  station(clockT, lastDt);
  ambience(clockT);
  grass(clockT);
  crane(clockT + 0.0);
  gauges(still.matches ? 0 : lastDt, top);
  pneumatic(clockT);
}
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  speed += (target - speed) * (1 - Math.exp(-dt / 0.6));
  lastDt = dt;
  if (!still.matches) { angle -= speed * dt; wheel2 += 0.6 * dt; clockT += dt; } else clockT = 4;
  draw();
  frame = visible ? requestAnimationFrame(tick) : 0;
}
const run = () => { if (!frame && visible) { last = 0; frame = requestAnimationFrame(tick); } };
new IntersectionObserver((e) => { visible = e[e.length - 1].isIntersecting; if (visible) run(); }, { rootMargin: "120px 0px" }).observe(stage);
stage.addEventListener("pointermove", (event) => { const b = svg.getBoundingClientRect(); const f = (event.clientX - b.left) / b.width; target = 0.05 + Math.max(0, Math.min(1, f)) * 0.5; });
stage.addEventListener("pointerleave", () => { target = 0.11; });
stage.addEventListener("keydown", (event) => { if (event.key === "ArrowRight") { angle -= TAU / CARS; draw(); } if (event.key === "ArrowLeft") { angle += TAU / CARS; draw(); } });
draw();
