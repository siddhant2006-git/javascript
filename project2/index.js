
// ─── CHARTS ───────────────────────────────────────────────────
const monthLabels = ['Apr','May','Jun','Jul','Aug','Sep'];

// Revenue trend
new Chart(document.getElementById('revenueChart'), {
  type: 'line',
  data: {
    labels: monthLabels,
    datasets: [
      {
        label: 'Revenue',
        data: [280, 310, 345, 390, 420, 482],
        borderColor: '#2d6be4',
        backgroundColor: 'rgba(45,107,228,0.08)',
        fill: true, tension: 0.4, pointRadius: 4,
        pointBackgroundColor: '#2d6be4', pointBorderColor: '#fff', pointBorderWidth: 2
      },
      {
        label: 'Target',
        data: [300, 320, 360, 380, 410, 460],
        borderColor: '#e85d2f',
        borderDash: [4,4], fill: false, tension: 0.4,
        pointRadius: 0
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { family:'Outfit', size:11 }, color:'#888b96' } },
      y: { grid: { color:'rgba(14,15,17,0.05)' }, ticks: { font: { family:'Outfit', size:11 }, color:'#888b96', callback: v => '₹'+v+'L' } }
    }
  }
});

// Segment donut
new Chart(document.getElementById('segChart'), {
  type: 'doughnut',
  data: {
    labels: ['Enterprise','SMB','Startup'],
    datasets: [{ data: [52,31,17], backgroundColor: ['#2d6be4','#e85d2f','#1fa060'], borderWidth: 0, hoverOffset: 4 }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    cutout: '70%',
    plugins: { legend: { display: false } }
  }
});

// Bar chart
new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: monthLabels,
    datasets: [{
      label: 'Deals',
      data: [42, 58, 51, 74, 69, 88],
      backgroundColor: ['#e0eaff','#e0eaff','#e0eaff','#2d6be4','#2d6be4','#2d6be4'],
      borderRadius: 4, borderSkipped: false
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { family:'Outfit', size:10 }, color:'#888b96' } },
      y: { grid: { color:'rgba(14,15,17,0.05)' }, ticks: { font: { family:'Outfit', size:10 }, color:'#888b96' } }
    }
  }
});

// Sparklines
function makeSparkline(id, data, color) {
  new Chart(document.getElementById(id), {
    type: 'line',
    data: {
      labels: data.map((_,i)=>i),
      datasets: [{ data, borderColor: color, backgroundColor: 'transparent', borderWidth: 1.5, pointRadius: 0, tension: 0.4 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display:false } },
      scales: { x: { display:false }, y: { display:false } } }
  });
}
makeSparkline('spark1', [220,240,255,260,310,340,380,420,482], '#2d6be4');
makeSparkline('spark2', [18000,19200,20100,21500,22300,23100,24100,24891], '#1fa060');
makeSparkline('spark3', [1.9,2.0,1.8,2.1,2.2,2.4,2.3,2.3], '#e85d2f');
makeSparkline('spark4', [90000,95000,100000,105000,110000,125000,132000,140000], '#6e42ca');

// ─── UI INTERACTIONS ──────────────────────────────────────────
function switchTab(el, tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  if(tab === 'new') { showToast('✨','Opening new dashboard...'); el.classList.remove('active'); document.querySelector('.tab-btn').classList.add('active'); }
}

function switchRightTab(el, section) {
  document.querySelectorAll('.right-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.panel-section').forEach(p => p.classList.remove('visible'));
  document.getElementById('panel-'+section).classList.add('visible');
}

function setChip(el) {
  const siblings = el.parentElement.querySelectorAll('.chip');
  siblings.forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  showToast('🔃', 'Filter: ' + el.textContent);
}

function showToast(icon, msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

function rollback(version) {
  showToast('⏮', `Rolling back to ${version}...`);
  setTimeout(() => showToast('✅', `Restored to ${version} successfully`), 1200);
}

function showVersionPanel() {
  document.querySelectorAll('.right-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.right-tab')[1].classList.add('active');
  document.querySelectorAll('.panel-section').forEach(p => p.classList.remove('visible'));
  document.getElementById('panel-versions').classList.add('visible');
}

function shareModal() { showToast('🔗', 'Share link copied to clipboard!'); }
function exportDash() { showToast('📤', 'Exporting dashboard as PDF...'); }

function addWidget() {
  showToast('➕', 'Widget picker opened');
}

// ─── DRAG & DROP ─────────────────────────────────────────────
let draggedType = null;
function dragStart(e, type) { draggedType = type; }
function allowDrop(e) { e.preventDefault(); }
function dropWidget(e) {
  e.preventDefault();
  document.getElementById('dropZone').classList.remove('drag-over');
  if(draggedType) {
    showToast('📊', `${draggedType.charAt(0).toUpperCase()+draggedType.slice(1)} widget added!`);
    draggedType = null;
  }
}

// ─── TABLE FILTER ────────────────────────────────────────────
function filterTable(val) {
  const rows = document.querySelectorAll('#accountTable tbody tr');
  rows.forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(val.toLowerCase()) ? '' : 'none';
  });
}

// ─── COLLABORATIVE CURSOR ANIMATION ─────────────────────────
const cursors = [
  { el: document.getElementById('cursor1'), vx: 1.2, vy: 0.7, x: 200, y: 300, bounds: { x1:100, x2:700, y1:150, y2:550 } },
  { el: document.getElementById('cursor2'), vx: -0.8, vy: 1.1, x: 600, y: 450, bounds: { x1:300, x2:900, y1:200, y2:600 } }
];
function animateCursors() {
  cursors.forEach(c => {
    c.x += c.vx; c.y += c.vy;
    if(c.x <= c.bounds.x1 || c.x >= c.bounds.x2) c.vx *= -1;
    if(c.y <= c.bounds.y1 || c.y >= c.bounds.y2) c.vy *= -1;
    c.el.style.left = c.x + 'px'; c.el.style.top = c.y + 'px';
  });
  requestAnimationFrame(animateCursors);
}
animateCursors();

// ─── LIVE DATA SIMULATION ────────────────────────────────────
let revVal = 482;
setInterval(() => {
  const delta = (Math.random() - 0.48) * 2;
  revVal = Math.max(470, Math.min(500, revVal + delta));
  // Simulate activity messages
  const actions = [
    ['RM', '#e85d2f', 'Rahul', 'updated the Revenue filter'],
    ['AT', '#1fa060', 'Anika', 'toggled Q3 comparison view'],
    ['PS', '#2d6be4', 'Priya', 'refreshed Stripe data source'],
  ];
  const pick = actions[Math.floor(Math.random()*actions.length)];
  const feed = document.getElementById('activityFeed');
  const item = document.createElement('div');
  item.className = 'activity-item';
  item.innerHTML = `<div class="activity-avatar-sm" style="background:${pick[1]};">${pick[0]}</div>
    <div class="activity-content">
      <div class="activity-text"><strong>${pick[2]}</strong> ${pick[3]}</div>
      <div class="activity-time">just now</div>
    </div>`;
  feed.insertBefore(item, feed.firstChild);
  if(feed.children.length > 10) feed.lastChild.remove();
}, 6000);
