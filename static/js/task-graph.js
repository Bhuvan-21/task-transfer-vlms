(function() {
  const TASKS = [
    "Art_Style", "Counting", "Forensic_Detection", "Functional_Correspondence",
    "Jigsaw", "Multi-view_Reasoning", "Object_Localization", "Relative_Depth",
    "Relative_Reflectance", "Semantic_Correspondence", "Spatial_Relation",
    "Visual_Correspondence", "Visual_Similarity"
  ];

  const EDGES = [
    {source:"Art_Style",target:"Counting",pgf:0.068},{source:"Art_Style",target:"Forensic_Detection",pgf:0.0855},{source:"Art_Style",target:"Functional_Correspondence",pgf:0.0306},{source:"Art_Style",target:"Jigsaw",pgf:0.2531},{source:"Art_Style",target:"Multi-view_Reasoning",pgf:-0.0531},{source:"Art_Style",target:"Object_Localization",pgf:-0.1396},{source:"Art_Style",target:"Relative_Depth",pgf:0.1205},{source:"Art_Style",target:"Relative_Reflectance",pgf:0.1995},{source:"Art_Style",target:"Semantic_Correspondence",pgf:-0.0634},{source:"Art_Style",target:"Spatial_Relation",pgf:0.1033},{source:"Art_Style",target:"Visual_Correspondence",pgf:0.2849},{source:"Art_Style",target:"Visual_Similarity",pgf:0.5775},
    {source:"Counting",target:"Art_Style",pgf:0.4364},{source:"Counting",target:"Forensic_Detection",pgf:0.0789},{source:"Counting",target:"Functional_Correspondence",pgf:0.025},{source:"Counting",target:"Jigsaw",pgf:0.1928},{source:"Counting",target:"Multi-view_Reasoning",pgf:-0.0637},{source:"Counting",target:"Object_Localization",pgf:-0.0873},{source:"Counting",target:"Relative_Depth",pgf:0.2496},{source:"Counting",target:"Relative_Reflectance",pgf:0.1809},{source:"Counting",target:"Semantic_Correspondence",pgf:-0.0352},{source:"Counting",target:"Spatial_Relation",pgf:0.198},{source:"Counting",target:"Visual_Correspondence",pgf:0.405},{source:"Counting",target:"Visual_Similarity",pgf:0.6842},
    {source:"Forensic_Detection",target:"Art_Style",pgf:0.4915},{source:"Forensic_Detection",target:"Counting",pgf:0.0619},{source:"Forensic_Detection",target:"Functional_Correspondence",pgf:0},{source:"Forensic_Detection",target:"Jigsaw",pgf:0.0125},{source:"Forensic_Detection",target:"Multi-view_Reasoning",pgf:-0.0531},{source:"Forensic_Detection",target:"Object_Localization",pgf:-0.1446},{source:"Forensic_Detection",target:"Relative_Depth",pgf:0.0127},{source:"Forensic_Detection",target:"Relative_Reflectance",pgf:0.1915},{source:"Forensic_Detection",target:"Semantic_Correspondence",pgf:-0.081},{source:"Forensic_Detection",target:"Spatial_Relation",pgf:0.1311},{source:"Forensic_Detection",target:"Visual_Correspondence",pgf:0.2534},{source:"Forensic_Detection",target:"Visual_Similarity",pgf:0.6021},
    {source:"Functional_Correspondence",target:"Art_Style",pgf:0.4703},{source:"Functional_Correspondence",target:"Counting",pgf:0.0433},{source:"Functional_Correspondence",target:"Forensic_Detection",pgf:-0.1118},{source:"Functional_Correspondence",target:"Jigsaw",pgf:0.0257},{source:"Functional_Correspondence",target:"Multi-view_Reasoning",pgf:-0.0354},{source:"Functional_Correspondence",target:"Object_Localization",pgf:-0.0579},{source:"Functional_Correspondence",target:"Relative_Depth",pgf:0.2627},{source:"Functional_Correspondence",target:"Relative_Reflectance",pgf:0.2021},{source:"Functional_Correspondence",target:"Semantic_Correspondence",pgf:-0.1972},{source:"Functional_Correspondence",target:"Spatial_Relation",pgf:0.1122},{source:"Functional_Correspondence",target:"Visual_Correspondence",pgf:0.2721},{source:"Functional_Correspondence",target:"Visual_Similarity",pgf:0.5777},
    {source:"Jigsaw",target:"Art_Style",pgf:0.4449},{source:"Jigsaw",target:"Counting",pgf:0.1431},{source:"Jigsaw",target:"Forensic_Detection",pgf:-0.2961},{source:"Jigsaw",target:"Functional_Correspondence",pgf:0.0917},{source:"Jigsaw",target:"Multi-view_Reasoning",pgf:-0.1627},{source:"Jigsaw",target:"Object_Localization",pgf:-0.1244},{source:"Jigsaw",target:"Relative_Depth",pgf:0.3211},{source:"Jigsaw",target:"Relative_Reflectance",pgf:0.2048},{source:"Jigsaw",target:"Semantic_Correspondence",pgf:-0.1444},{source:"Jigsaw",target:"Spatial_Relation",pgf:0.1599},{source:"Jigsaw",target:"Visual_Correspondence",pgf:0.1329},{source:"Jigsaw",target:"Visual_Similarity",pgf:0.6406},
    {source:"Multi-view_Reasoning",target:"Art_Style",pgf:0.5042},{source:"Multi-view_Reasoning",target:"Counting",pgf:0.0997},{source:"Multi-view_Reasoning",target:"Forensic_Detection",pgf:-0.0921},{source:"Multi-view_Reasoning",target:"Functional_Correspondence",pgf:0.0861},{source:"Multi-view_Reasoning",target:"Jigsaw",pgf:0.1115},{source:"Multi-view_Reasoning",target:"Object_Localization",pgf:-0.0204},{source:"Multi-view_Reasoning",target:"Relative_Depth",pgf:0.357},{source:"Multi-view_Reasoning",target:"Relative_Reflectance",pgf:0.1941},{source:"Multi-view_Reasoning",target:"Semantic_Correspondence",pgf:-0.0035},{source:"Multi-view_Reasoning",target:"Spatial_Relation",pgf:0.2073},{source:"Multi-view_Reasoning",target:"Visual_Correspondence",pgf:0.2846},{source:"Multi-view_Reasoning",target:"Visual_Similarity",pgf:0.5631},
    {source:"Object_Localization",target:"Art_Style",pgf:0.4746},{source:"Object_Localization",target:"Counting",pgf:0.043},{source:"Object_Localization",target:"Forensic_Detection",pgf:-0.0461},{source:"Object_Localization",target:"Functional_Correspondence",pgf:0.0056},{source:"Object_Localization",target:"Jigsaw",pgf:0.0297},{source:"Object_Localization",target:"Multi-view_Reasoning",pgf:-0.0706},{source:"Object_Localization",target:"Relative_Depth",pgf:0.2496},{source:"Object_Localization",target:"Relative_Reflectance",pgf:0.2314},{source:"Object_Localization",target:"Semantic_Correspondence",pgf:-0.0423},{source:"Object_Localization",target:"Spatial_Relation",pgf:0.1506},{source:"Object_Localization",target:"Visual_Correspondence",pgf:0.2213},{source:"Object_Localization",target:"Visual_Similarity",pgf:0.5679},
    {source:"Relative_Depth",target:"Art_Style",pgf:0.4746},{source:"Relative_Depth",target:"Counting",pgf:0.1058},{source:"Relative_Depth",target:"Forensic_Detection",pgf:-0.0658},{source:"Relative_Depth",target:"Functional_Correspondence",pgf:0.0528},{source:"Relative_Depth",target:"Jigsaw",pgf:0.1456},{source:"Relative_Depth",target:"Multi-view_Reasoning",pgf:-0.0919},{source:"Relative_Depth",target:"Object_Localization",pgf:-0.2825},{source:"Relative_Depth",target:"Relative_Reflectance",pgf:0.2633},{source:"Relative_Depth",target:"Semantic_Correspondence",pgf:-0.0211},{source:"Relative_Depth",target:"Spatial_Relation",pgf:0.2258},{source:"Relative_Depth",target:"Visual_Correspondence",pgf:0.4173},{source:"Relative_Depth",target:"Visual_Similarity",pgf:0.5727},
    {source:"Relative_Reflectance",target:"Art_Style",pgf:0.4788},{source:"Relative_Reflectance",target:"Counting",pgf:0.093},{source:"Relative_Reflectance",target:"Forensic_Detection",pgf:-0.0921},{source:"Relative_Reflectance",target:"Functional_Correspondence",pgf:0.0444},{source:"Relative_Reflectance",target:"Jigsaw",pgf:0.1673},{source:"Relative_Reflectance",target:"Multi-view_Reasoning",pgf:-0.0672},{source:"Relative_Reflectance",target:"Object_Localization",pgf:-0.1724},{source:"Relative_Reflectance",target:"Relative_Depth",pgf:0.2782},{source:"Relative_Reflectance",target:"Semantic_Correspondence",pgf:-0.0493},{source:"Relative_Reflectance",target:"Spatial_Relation",pgf:0.1129},{source:"Relative_Reflectance",target:"Visual_Correspondence",pgf:0.342},{source:"Relative_Reflectance",target:"Visual_Similarity",pgf:0.6502},
    {source:"Semantic_Correspondence",target:"Art_Style",pgf:0.5678},{source:"Semantic_Correspondence",target:"Counting",pgf:0.118},{source:"Semantic_Correspondence",target:"Forensic_Detection",pgf:-0.1118},{source:"Semantic_Correspondence",target:"Functional_Correspondence",pgf:0.1722},{source:"Semantic_Correspondence",target:"Jigsaw",pgf:0.0725},{source:"Semantic_Correspondence",target:"Multi-view_Reasoning",pgf:-0.0566},{source:"Semantic_Correspondence",target:"Object_Localization",pgf:-0.2119},{source:"Semantic_Correspondence",target:"Relative_Depth",pgf:0.1136},{source:"Semantic_Correspondence",target:"Relative_Reflectance",pgf:0.2287},{source:"Semantic_Correspondence",target:"Spatial_Relation",pgf:0.1791},{source:"Semantic_Correspondence",target:"Visual_Correspondence",pgf:0.5947},{source:"Semantic_Correspondence",target:"Visual_Similarity",pgf:0.6552},
    {source:"Spatial_Relation",target:"Art_Style",pgf:0.4915},{source:"Spatial_Relation",target:"Counting",pgf:0.162},{source:"Spatial_Relation",target:"Forensic_Detection",pgf:-0.1184},{source:"Spatial_Relation",target:"Functional_Correspondence",pgf:0.1222},{source:"Spatial_Relation",target:"Jigsaw",pgf:0.1119},{source:"Spatial_Relation",target:"Multi-view_Reasoning",pgf:-0.0283},{source:"Spatial_Relation",target:"Object_Localization",pgf:-0.1114},{source:"Spatial_Relation",target:"Relative_Depth",pgf:0.2206},{source:"Spatial_Relation",target:"Relative_Reflectance",pgf:0.1862},{source:"Spatial_Relation",target:"Semantic_Correspondence",pgf:0.0246},{source:"Spatial_Relation",target:"Visual_Correspondence",pgf:0.2215},{source:"Spatial_Relation",target:"Visual_Similarity",pgf:0.6115},
    {source:"Visual_Correspondence",target:"Art_Style",pgf:0.4831},{source:"Visual_Correspondence",target:"Counting",pgf:0.0738},{source:"Visual_Correspondence",target:"Forensic_Detection",pgf:-0.1184},{source:"Visual_Correspondence",target:"Functional_Correspondence",pgf:0.1194},{source:"Visual_Correspondence",target:"Jigsaw",pgf:0.1672},{source:"Visual_Correspondence",target:"Multi-view_Reasoning",pgf:-0.0955},{source:"Visual_Correspondence",target:"Object_Localization",pgf:-0.1876},{source:"Visual_Correspondence",target:"Relative_Depth",pgf:0.3779},{source:"Visual_Correspondence",target:"Relative_Reflectance",pgf:0.1702},{source:"Visual_Correspondence",target:"Semantic_Correspondence",pgf:-0.0176},{source:"Visual_Correspondence",target:"Spatial_Relation",pgf:0.2731},{source:"Visual_Correspondence",target:"Visual_Similarity",pgf:0.5727},
    {source:"Visual_Similarity",target:"Art_Style",pgf:0.3729},{source:"Visual_Similarity",target:"Counting",pgf:0.0744},{source:"Visual_Similarity",target:"Forensic_Detection",pgf:-0.3553},{source:"Visual_Similarity",target:"Functional_Correspondence",pgf:0.0667},{source:"Visual_Similarity",target:"Jigsaw",pgf:0.1885},{source:"Visual_Similarity",target:"Multi-view_Reasoning",pgf:-0.1412},{source:"Visual_Similarity",target:"Object_Localization",pgf:-0.096},{source:"Visual_Similarity",target:"Relative_Depth",pgf:0.3501},{source:"Visual_Similarity",target:"Relative_Reflectance",pgf:0.2234},{source:"Visual_Similarity",target:"Semantic_Correspondence",pgf:-0.1338},{source:"Visual_Similarity",target:"Spatial_Relation",pgf:0.1599},{source:"Visual_Similarity",target:"Visual_Correspondence",pgf:0.3159}
  ];

  function formatTaskName(name) {
    return name.replace(/_/g, ' ').replace(/-/g, ' ');
  }

  function initTaskGraph() {
    const container = document.getElementById('task-graph-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = 600;
    let currentThreshold = 0.25;
    let filterMode = 'all'; // 'all', 'positive', 'negative'
    let selectedNode = null;

    // Build nodes
    const nodes = TASKS.map(t => ({ id: t, label: formatTaskName(t) }));

    // SVG setup
    const svg = d3.select('#task-graph-svg')
      .attr('width', width)
      .attr('height', height);

    // Arrow marker defs container
    const defs = svg.append('defs');
    let markerCounter = 0;

    function getOrCreateMarker(color, opacity) {
      const key = color.replace('#','') + '_' + Math.round(opacity * 100);
      const id = 'arrow-' + key;
      if (!defs.select('#' + id).empty()) return 'url(#' + id + ')';
      defs.append('marker')
        .attr('id', id)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 20)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', color)
        .attr('opacity', opacity);
      return 'url(#' + id + ')';
    }

    const g = svg.append('g');

    const linkGroup = g.append('g').attr('class', 'links');
    const nodeGroup = g.append('g').attr('class', 'nodes');

    // Tooltip
    const tooltip = d3.select('#task-graph-tooltip');

    // Force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink().id(d => d.id).distance(180))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(40));

    function getFilteredEdges() {
      return EDGES.filter(e => {
        const absPgf = Math.abs(e.pgf);
        if (absPgf < currentThreshold) return false;
        if (filterMode === 'positive' && e.pgf < 0) return false;
        if (filterMode === 'negative' && e.pgf > 0) return false;
        return true;
      });
    }

    function getEdgeOpacity(pgf) {
      const abs = Math.abs(pgf);
      return Math.max(0.2, Math.min(1, abs / 0.7));
    }

    function getEdgeWidth(pgf) {
      const abs = Math.abs(pgf);
      return 1 + abs * 4;
    }

    function update() {
      const edges = getFilteredEdges();
      const linkData = edges.map(e => ({
        source: e.source,
        target: e.target,
        pgf: e.pgf
      }));

      // Update links
      const links = linkGroup.selectAll('.graph-link')
        .data(linkData, d => d.source.id ? d.source.id + '-' + d.target.id : d.source + '-' + d.target);

      links.exit().remove();

      const linksEnter = links.enter()
        .append('line')
        .attr('class', 'graph-link');

      const allLinks = linksEnter.merge(links);

      allLinks
        .attr('stroke', d => d.pgf >= 0 ? '#22c55e' : '#ef4444')
        .attr('stroke-opacity', d => {
          if (selectedNode) {
            const srcId = d.source.id || d.source;
            const tgtId = d.target.id || d.target;
            if (srcId === selectedNode || tgtId === selectedNode) {
              return getEdgeOpacity(d.pgf);
            }
            return 0.05;
          }
          return getEdgeOpacity(d.pgf);
        })
        .attr('stroke-width', d => getEdgeWidth(d.pgf))
        .attr('marker-end', d => {
          const color = d.pgf >= 0 ? '#22c55e' : '#ef4444';
          let opacity;
          if (selectedNode) {
            const srcId = d.source.id || d.source;
            const tgtId = d.target.id || d.target;
            opacity = (srcId === selectedNode || tgtId === selectedNode) ? getEdgeOpacity(d.pgf) : 0.05;
          } else {
            opacity = getEdgeOpacity(d.pgf);
          }
          return getOrCreateMarker(color, opacity);
        });

      // Update nodes
      const nodeElements = nodeGroup.selectAll('.graph-node')
        .data(nodes, d => d.id);

      const nodeEnter = nodeElements.enter()
        .append('g')
        .attr('class', 'graph-node')
        .call(d3.drag()
          .on('start', dragStarted)
          .on('drag', dragged)
          .on('end', dragEnded));

      nodeEnter.append('circle')
        .attr('r', 18)
        .attr('fill', '#4a6fa5')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);

      nodeEnter.append('text')
        .attr('dy', 32)
        .attr('text-anchor', 'middle')
        .attr('class', 'graph-node-label')
        .text(d => d.label);

      const allNodes = nodeEnter.merge(nodeElements);

      allNodes.select('circle')
        .attr('fill', d => {
          if (selectedNode === d.id) return '#f59e0b';
          if (selectedNode) {
            const connected = edges.some(e => {
              const s = e.source.id || e.source;
              const t = e.target.id || e.target;
              return (s === selectedNode && t === d.id) || (t === selectedNode && s === d.id);
            });
            return connected ? '#4a6fa5' : '#94a3b8';
          }
          return '#4a6fa5';
        })
        .attr('opacity', d => {
          if (!selectedNode) return 1;
          if (selectedNode === d.id) return 1;
          const connected = edges.some(e => {
            const s = e.source.id || e.source;
            const t = e.target.id || e.target;
            return (s === selectedNode && t === d.id) || (t === selectedNode && s === d.id);
          });
          return connected ? 1 : 0.3;
        });

      allNodes.select('text')
        .attr('opacity', d => {
          if (!selectedNode) return 1;
          if (selectedNode === d.id) return 1;
          const connected = edges.some(e => {
            const s = e.source.id || e.source;
            const t = e.target.id || e.target;
            return (s === selectedNode && t === d.id) || (t === selectedNode && s === d.id);
          });
          return connected ? 1 : 0.3;
        });

      // Node events
      allNodes
        .on('click', (event, d) => {
          event.stopPropagation();
          selectedNode = selectedNode === d.id ? null : d.id;
          update();
        })
        .on('mouseover', (event, d) => {
          const connEdges = edges.filter(e => {
            const s = e.source.id || e.source;
            const t = e.target.id || e.target;
            return s === d.id || t === d.id;
          });
          const posOut = connEdges.filter(e => (e.source.id || e.source) === d.id && e.pgf > 0).length;
          const negOut = connEdges.filter(e => (e.source.id || e.source) === d.id && e.pgf < 0).length;
          const posIn = connEdges.filter(e => (e.target.id || e.target) === d.id && e.pgf > 0).length;
          const negIn = connEdges.filter(e => (e.target.id || e.target) === d.id && e.pgf < 0).length;

          tooltip
            .style('display', 'block')
            .style('left', (event.pageX + 12) + 'px')
            .style('top', (event.pageY - 12) + 'px')
            .html(
              '<strong>' + d.label + '</strong><br>' +
              '<span style="color:#22c55e">+' + posOut + ' out</span> / ' +
              '<span style="color:#ef4444">-' + negOut + ' out</span><br>' +
              '<span style="color:#22c55e">+' + posIn + ' in</span> / ' +
              '<span style="color:#ef4444">-' + negIn + ' in</span>'
            );
        })
        .on('mousemove', (event) => {
          tooltip
            .style('left', (event.pageX + 12) + 'px')
            .style('top', (event.pageY - 12) + 'px');
        })
        .on('mouseout', () => {
          tooltip.style('display', 'none');
        });

      // Link hover for PGF value
      allLinks
        .on('mouseover', (event, d) => {
          const srcLabel = formatTaskName(d.source.id || d.source);
          const tgtLabel = formatTaskName(d.target.id || d.target);
          const sign = d.pgf >= 0 ? '+' : '';
          const color = d.pgf >= 0 ? '#22c55e' : '#ef4444';
          tooltip
            .style('display', 'block')
            .style('left', (event.pageX + 12) + 'px')
            .style('top', (event.pageY - 12) + 'px')
            .html(
              '<strong>' + srcLabel + '</strong> &rarr; <strong>' + tgtLabel + '</strong><br>' +
              'PGF: <span style="color:' + color + ';font-weight:700">' + sign + d.pgf.toFixed(4) + '</span>'
            );
        })
        .on('mousemove', (event) => {
          tooltip
            .style('left', (event.pageX + 12) + 'px')
            .style('top', (event.pageY - 12) + 'px');
        })
        .on('mouseout', () => {
          tooltip.style('display', 'none');
        });

      // Update simulation links
      simulation.force('link').links(linkData);
      simulation.alpha(0.3).restart();
    }

    // Tick
    simulation.on('tick', () => {
      linkGroup.selectAll('.graph-link')
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      nodeGroup.selectAll('.graph-node')
        .attr('transform', d => 'translate(' + d.x + ',' + d.y + ')');
    });

    // Drag handlers
    function dragStarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragEnded(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Click on background to deselect
    svg.on('click', (event) => {
      if (event.target === svg.node()) {
        selectedNode = null;
        update();
      }
    });

    // Controls
    const thresholdSlider = document.getElementById('pgf-threshold');
    const thresholdValue = document.getElementById('pgf-threshold-value');
    if (thresholdSlider) {
      thresholdSlider.addEventListener('input', function() {
        currentThreshold = parseFloat(this.value);
        thresholdValue.textContent = currentThreshold.toFixed(2);
        update();
      });
    }

    document.querySelectorAll('.graph-filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.graph-filter-btn').forEach(b => b.classList.remove('is-active'));
        this.classList.add('is-active');
        filterMode = this.dataset.filter;
        update();
      });
    });

    // Initial render
    update();

    // Handle resize
    window.addEventListener('resize', () => {
      const newWidth = container.clientWidth;
      svg.attr('width', newWidth);
      simulation.force('center', d3.forceCenter(newWidth / 2, height / 2));
      simulation.alpha(0.3).restart();
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTaskGraph);
  } else {
    initTaskGraph();
  }
})();
