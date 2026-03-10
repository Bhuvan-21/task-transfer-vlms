(function() {
  const TASKS = [
    "Visual_Similarity", "Art_Style", "Visual_Correspondence", "Relative_Depth",
    "Relative_Reflectance", "Spatial_Relation", "Jigsaw", "Counting",
    "Functional_Correspondence", "Semantic_Correspondence", "Multi-view_Reasoning",
    "Object_Localization", "Forensic_Detection"
  ];

  const DATA = {
    "3B": [
      [0.692,0.1333,0.0678,0.3636,0.1968,-0.125,0.0844,-0.0705,-0.0198,0.0208,0.0406,-0.0161,-0.0452],
      [0.1964,0.3222,-0.0699,0.25,0.1463,-0.0625,-0.0455,-0.1026,-0.0619,-0.0391,0.075,-0.0282,0.0723],
      [-0.1875,-0.1056,0.5424,0.1682,0.1543,-0.1667,0.0942,-0.0321,0.0421,0.0052,0.075,-0.125,-0.1386],
      [-0.0937,-0.1722,0.0551,0.8273,0.0691,-0.0833,-0.039,-0.0962,0.0446,0.1276,0.075,-0.0726,-0.0422],
      [0.1027,0.05,0.1208,0.3182,0.1888,-0.2396,-0.0487,-0.0962,0.0297,-0.0182,0.075,-0.004,-0.0753],
      [-0.1027,-0.1444,0.0339,0.3409,0.0585,0.1979,-0.013,-0.1795,-0.005,0.0339,0.075,-0.0323,-0.1687],
      [0.4241,0.05,0.0742,0.2227,0.1702,-0.0208,0.3864,-0.0513,0.0124,-0.0417,0.05,0.0323,-0.0241],
      [0.1696,-0.0389,0.1504,0.3364,0.1676,-0.1562,-0.0357,-0.0962,0.0198,-0.0026,0.075,-0.0726,-0.0753],
      [0.0938,-0.2556,-0.0297,0.0591,0.1516,-0.2083,0.0162,0.0321,-0.0297,-0.0469,0.075,0.0847,-0.0181],
      [-0.0893,-0.1389,0.2225,0.2636,0.1489,-0.1562,0.0812,0.0192,0.1287,0.0911,0.075,-0.1331,-0.0753],
      [0.1652,-0.0778,-0.0445,0.0636,0.0399,-0.2292,-0.0,-0.0897,-0.0495,-0.013,0.175,0.004,-0.1386],
      [-0.2455,-0.0444,-0.0424,0.05,0.1888,-0.1146,0.0682,-0.0705,0.0446,-0.0729,0.075,0.0403,-0.1145],
      [0.2188,-0.1556,-0.0678,0.1909,0.1516,-0.1667,-0.1039,-0.0256,0.0569,0.0625,0.0469,-0.004,0.503]
    ],
    "7B": [
      [0.525,0.1402,-0.3585,0.125,0.1556,0.0312,0.4224,-0.0064,0.0076,-0.1589,0.0812,0.05,-0.2606],
      [-0.1625,0.2622,-0.3632,0.1953,0.0611,0.3906,0.1767,-0.0256,-0.0259,-0.1465,0.1062,0.0417,0.0845],
      [0.3125,0.0061,0.6274,0.3281,0.0556,0.1562,0.2802,-0.0192,0.0413,-0.1372,0.0406,0.1333,-0.0634],
      [0.1125,-0.0305,-0.1038,0.6406,0.0417,-0.1875,-0.1336,-0.0192,-0.0725,-0.1744,0.0281,-0.1083,-0.1585],
      [0.0375,0.0793,-0.2689,0.2656,0.2056,0.1094,-0.1164,-0.0192,-0.0103,-0.1745,0.0844,0.0583,-0.0282],
      [-0.0125,-0.0488,-0.4528,0.3516,0.1167,0.1875,0.0388,0.0705,0.0309,-0.1464,0.0156,-0.0083,-0.088],
      [0.1375,0.1159,-0.3821,0.0156,0.025,0.0937,0.7414,-0.0769,-0.0285,-0.1745,0.05,0.0083,-0.2148],
      [-0.625,0.2317,-0.5236,0.0781,0.1,-0.3438,-0.2198,-0.0769,-0.0337,-0.1215,0.0687,0.0083,0.0317],
      [-1.1625,-0.0061,-0.783,-0.1953,0.1139,-0.0,-0.2629,-0.0128,0.1189,-0.2555,0.0781,0.1292,-0.3063],
      [-0.275,0.2622,0.4811,0.0781,0.0583,-0.0938,-0.1767,-0.0128,0.1421,0.1743,0.0719,0.1833,-0.0141],
      [0.3375,0.0488,-0.4151,0.2891,0.1056,0.125,-0.1121,0.0192,0.0386,-0.1121,0.5844,0.0542,-0.0775],
      [-1.9375,0.0976,-1.0425,-0.7109,-0.0861,0.0781,-0.2198,0.0449,-0.013,-0.1059,0.0875,0.275,-0.2077],
      [-0.1875,0.2134,-0.6792,0.1016,0.0472,0.0625,-0.8017,-0.0513,0.0205,-0.0995,0.0469,0.0375,0.7887]
    ],
    "32B": [
      [0.8783,0.3729,0.3159,0.3501,0.2234,0.1599,0.1885,0.0744,0.0667,-0.1338,-0.1412,-0.096,-0.3553],
      [0.5775,0.5932,0.2849,0.1205,0.1995,0.1033,0.2531,0.068,0.0306,-0.0634,-0.0531,-0.1396,0.0855],
      [0.5727,0.4831,0.5571,0.3779,0.1702,0.2731,0.1672,0.0738,0.1194,-0.0176,-0.0955,-0.1876,-0.1184],
      [0.5727,0.4746,0.4173,0.7418,0.2633,0.2258,0.1456,0.1058,0.0528,-0.0211,-0.0919,-0.2825,-0.0658],
      [0.6502,0.4788,0.342,0.2782,0.2739,0.1129,0.1673,0.093,0.0444,-0.0493,-0.0672,-0.1724,-0.0921],
      [0.6115,0.4915,0.2215,0.2206,0.1862,0.4053,0.1119,0.162,0.1222,0.0246,-0.0283,-0.1114,-0.1184],
      [0.6406,0.4449,0.1329,0.3211,0.2048,0.1599,0.6008,0.1431,0.0917,-0.1444,-0.1627,-0.1244,-0.2961],
      [0.6842,0.4364,0.405,0.2496,0.1809,0.198,0.1928,0.1431,0.025,-0.0352,-0.0637,-0.0873,0.0789],
      [0.5777,0.4703,0.2721,0.2627,0.2021,0.1122,0.0257,0.0433,0.0333,-0.1972,-0.0354,-0.0579,-0.1118],
      [0.6552,0.5678,0.5947,0.1136,0.2287,0.1791,0.0725,0.118,0.1722,0.1127,-0.0566,-0.2119,-0.1118],
      [0.5631,0.5042,0.2846,0.357,0.1941,0.2073,0.1115,0.0997,0.0861,-0.0035,0.1589,-0.0204,-0.0921],
      [0.5679,0.4746,0.2213,0.2496,0.2314,0.1506,0.0297,0.043,0.0056,-0.0423,-0.0706,-0.0923,-0.0461],
      [0.6021,0.4915,0.2534,0.0127,0.1915,0.1311,0.0125,0.0619,-0.0,-0.081,-0.0531,-0.1446,0.5066]
    ]
  };

  function initHeatmap() {
    const container = document.getElementById('heatmap-container');
    if (!container) return;

    let currentModel = '32B';
    const n = TASKS.length;
    const margin = { top: 120, right: 30, bottom: 20, left: 160 };
    const cellSize = Math.min(42, (container.clientWidth - margin.left - margin.right) / n);
    const width = margin.left + n * cellSize + margin.right;
    const height = margin.top + n * cellSize + margin.bottom;

    const svg = d3.select('#heatmap-svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', '0 0 ' + width + ' ' + height);

    const tooltip = d3.select('#heatmap-tooltip');

    // Color scale: red for negative, white for 0, green for positive
    const colorScale = d3.scaleDiverging()
      .domain([-1, 0, 1])
      .interpolator(d3.interpolateRdYlGn);

    // Row labels (source tasks)
    const rowLabels = svg.append('g')
      .selectAll('text')
      .data(TASKS)
      .enter()
      .append('text')
      .attr('x', margin.left - 8)
      .attr('y', (d, i) => margin.top + i * cellSize + cellSize / 2)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'central')
      .style('font-size', '11px')
      .style('font-family', 'Inter, sans-serif')
      .style('fill', '#374151')
      .text(d => d.replace(/_/g, ' '));

    // Column labels (target tasks)
    const colLabels = svg.append('g')
      .selectAll('text')
      .data(TASKS)
      .enter()
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('transform', (d, i) => {
        const x = margin.left + i * cellSize + cellSize / 2;
        const y = margin.top - 8;
        return 'translate(' + x + ',' + y + ') rotate(-50)';
      })
      .attr('text-anchor', 'start')
      .style('font-size', '11px')
      .style('font-family', 'Inter, sans-serif')
      .style('fill', '#374151')
      .text(d => d.replace(/_/g, ' '));

    // Axis labels
    svg.append('text')
      .attr('x', margin.left + (n * cellSize) / 2)
      .attr('y', 12)
      .attr('text-anchor', 'middle')
      .style('font-size', '13px')
      .style('font-weight', '600')
      .style('font-family', 'Inter, sans-serif')
      .style('fill', '#1f2937')
      .text('Target Tasks');

    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -(margin.top + (n * cellSize) / 2))
      .attr('y', 14)
      .attr('text-anchor', 'middle')
      .style('font-size', '13px')
      .style('font-weight', '600')
      .style('font-family', 'Inter, sans-serif')
      .style('fill', '#1f2937')
      .text('Source Tasks');

    // Cell group
    const cellGroup = svg.append('g');

    function render(model) {
      const matrix = DATA[model];

      // Flatten data
      const cells = [];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          cells.push({ row: i, col: j, value: matrix[i][j] });
        }
      }

      const rects = cellGroup.selectAll('rect')
        .data(cells, d => d.row + '-' + d.col);

      rects.enter()
        .append('rect')
        .attr('x', d => margin.left + d.col * cellSize)
        .attr('y', d => margin.top + d.row * cellSize)
        .attr('width', cellSize - 1)
        .attr('height', cellSize - 1)
        .attr('rx', 2)
        .on('mouseover', function(event, d) {
          d3.select(this).attr('stroke', '#1f2937').attr('stroke-width', 2);
          const sign = d.value >= 0 ? '+' : '';
          const color = d.value >= 0 ? '#166534' : '#991b1b';
          tooltip
            .style('display', 'block')
            .style('left', (event.pageX + 12) + 'px')
            .style('top', (event.pageY - 12) + 'px')
            .html(
              '<strong>' + TASKS[d.row].replace(/_/g,' ') + '</strong> → <strong>' + TASKS[d.col].replace(/_/g,' ') + '</strong><br>' +
              'PGF: <span style="color:' + color + ';font-weight:700">' + sign + d.value.toFixed(4) + '</span>'
            );
        })
        .on('mousemove', function(event) {
          tooltip
            .style('left', (event.pageX + 12) + 'px')
            .style('top', (event.pageY - 12) + 'px');
        })
        .on('mouseout', function() {
          d3.select(this).attr('stroke', 'none');
          tooltip.style('display', 'none');
        })
        .merge(rects)
        .transition()
        .duration(400)
        .attr('fill', d => colorScale(d.value));

      // Cell text values
      const texts = cellGroup.selectAll('text.cell-value')
        .data(cells, d => d.row + '-' + d.col);

      texts.enter()
        .append('text')
        .attr('class', 'cell-value')
        .attr('x', d => margin.left + d.col * cellSize + cellSize / 2)
        .attr('y', d => margin.top + d.row * cellSize + cellSize / 2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .style('font-size', cellSize > 35 ? '9px' : '7px')
        .style('font-family', 'Inter, sans-serif')
        .style('pointer-events', 'none')
        .merge(texts)
        .transition()
        .duration(400)
        .text(d => {
          const v = d.value;
          if (Math.abs(v) < 0.005) return '0';
          return (v > 0 ? '' : '') + v.toFixed(2);
        })
        .attr('fill', d => {
          const abs = Math.abs(d.value);
          return abs > 0.4 ? '#fff' : '#1f2937';
        });
    }

    // Color legend
    const legendWidth = 200;
    const legendHeight = 12;
    const legendX = margin.left + (n * cellSize) / 2 - legendWidth / 2;
    const legendY = margin.top + n * cellSize + 6;

    // We won't add legend if it would clip; use bottom margin or separate element
    // Instead, add legend below the SVG in HTML

    // Model toggle buttons
    document.querySelectorAll('.heatmap-model-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.heatmap-model-btn').forEach(b => b.classList.remove('is-active'));
        this.classList.add('is-active');
        currentModel = this.dataset.model;
        render(currentModel);
      });
    });

    // Initial render
    render(currentModel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeatmap);
  } else {
    initHeatmap();
  }
})();
