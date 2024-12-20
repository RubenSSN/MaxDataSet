import { chapter1 } from './chapter1.js';
import { chapter2 } from './chapter2.js';
import { chapter3 } from './chapter3.js';
import { chapter4 } from './chapter4.js';
import { chapter5 } from './chapter5.js';
import { chapter6 } from './chapter6.js';
import { chapter7 } from './chapter7.js';
import { chapter8 } from './chapter8.js';

// Data object for the tree
const data = {
  name: "Harmonized Data Set",
  children: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8
  ]
};

// Layout parameters
const width = 1600; 
const marginTop = 10;
const marginRight = 10;
const marginBottom = 10;
const marginLeft = 200;

// Spacing between nodes
const nodeVerticalSpacing = 14;    // Formerly dx
const nodeHorizontalSpacing = 300; // Formerly dy

// Prepare hierarchy and layout
const root = d3.hierarchy(data);
const tree = d3.tree().nodeSize([nodeVerticalSpacing, nodeHorizontalSpacing]);
const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

// Create the SVG and set basic attributes
const svg = d3.create("svg")
  .attr("width", width)
  .attr("height", nodeVerticalSpacing)
  .attr("viewBox", [-marginLeft, -marginTop, width, nodeVerticalSpacing])
  .attr("style", "max-width: 100%; height: auto; font: 11px sans-serif; user-select: none;");

// Groups for links and nodes
const gLink = svg.append("g")
  .attr("fill", "none")
  .attr("stroke", "#555")
  .attr("stroke-opacity", 0.5)
  .attr("stroke-width", 1.3);

const gNode = svg.append("g")
  .attr("cursor", "pointer")
  .attr("pointer-events", "all");

// Collapse all nodes except the root
root.x0 = nodeHorizontalSpacing / 2;
root.y0 = 0;
root.descendants().forEach((d, i) => {
  d.id = i;
  d._children = d.children;
  if (d.depth && d._children) d.children = null; 
});

/**
 * Checks if a node belongs to the subtree of a specific section.
 * @param {Object} node - The target node.
 * @param {string} sectionName - The name of the top-level section to check (e.g., "1. General Information").
 * @returns {boolean} True if the node is part of the subtree, false otherwise.
 */
function isInSubtree(node, sectionName) {
  while (node) {
    if (node.data.name === sectionName) {
      return true;
    }
    node = node.parent;
  }
  return false;
}

/**
 * Handles node click: toggles between expanded and collapsed state
 */
function handleNodeClick(event, d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else if (d._children) {
    d.children = d._children;
    d._children = null;
  }
  update(event, d);
}

/**
 * Updates the tree layout and renders changes
 */
function update(event, source) {
  const duration = event?.altKey ? 2500 : 250;
  const nodes = root.descendants().reverse();
  const links = root.links();

  // Recalculate layout
  tree(root);

  // Find bounds to adjust SVG viewBox
  let left = root;
  let right = root;
  root.eachBefore(node => {
    if (node.x < left.x) left = node;
    if (node.x > right.x) right = node;
  });

  const height = right.x - left.x + marginTop + marginBottom;

  const transition = svg.transition()
    .duration(duration)
    .attr("height", height)
    .attr("viewBox", [-marginLeft, left.x - marginTop, width, height])
    .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

  // Update nodes
  const node = gNode.selectAll("g")
    .data(nodes, d => d.id);

  const nodeEnter = node.enter().append("g")
    .attr("transform", d => `translate(${source.y0},${source.x0})`)
    .attr("fill-opacity", 0)
    .attr("stroke-opacity", 0)
    .on("click", handleNodeClick);

  nodeEnter.append("circle")
    .attr("r", 2.5)
    .attr("fill", d => (d._children ? "#555" : "#999"))
    .attr("stroke-width", 10);

  nodeEnter.append("text")
    .attr("dy", "0.31em")
    .attr("x", d => (d._children ? -6 : 6))
    .attr("text-anchor", d => (d._children ? "end" : "start"))
    .text(d => d.data.name)
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 3)
    .attr("paint-order", "stroke")
    .attr("fill", "currentColor")
    .attr("stroke", "var(--theme-background)");

  // Transition for entering and updating nodes
  node.merge(nodeEnter).transition(transition)
    .attr("transform", d => `translate(${d.y},${d.x})`)
    .attr("fill-opacity", 1)
    .attr("stroke-opacity", 1);

  // Exit transition for removed nodes
  node.exit().transition(transition).remove()
    .attr("transform", d => `translate(${source.y},${source.x})`)
    .attr("fill-opacity", 0)
    .attr("stroke-opacity", 0);

  // Update links
  const link = gLink.selectAll("path")
    .data(links, d => d.target.id);

  const linkEnter = link.enter().append("path")
    .attr("d", () => {
      const o = { x: source.x0, y: source.y0 };
      return diagonal({ source: o, target: o });
    })
    .attr("stroke", d => {
      // Highlight links for specific sections and their subtrees
      if (isInSubtree(d.target, "1. General Information")) return "#ADD8E6"; // Light Blue
      if (isInSubtree(d.target, "2. Radiology")) return "#FFA07A";          // Light Salmon
      if (isInSubtree(d.target, "3. Biopsy")) return "#90EE90";             // Light Green
      if (isInSubtree(d.target, "4. Resection")) return "#FFD700";          // Gold
      if (isInSubtree(d.target, "5. Surgery")) return "#FF6347";            // Tomato Red
      if (isInSubtree(d.target, "6. Radiation")) return "#9370DB";          // Medium Purple
      if (isInSubtree(d.target, "7. Chemotherapy")) return "#87CEEB";       // Sky Blue
      if (isInSubtree(d.target, "8. Follow-Up and Additional Information")) return "#FF69B4"; // Hot Pink

      return "#ccc"; // Default gray for other links
    })
    .attr("stroke-opacity", 0.3) // Adjust link transparency
    .attr("stroke-width", 1.3);  // Consistent line thickness

  link.merge(linkEnter).transition(transition).attr("d", diagonal);

  link.exit().transition(transition).remove()
    .attr("d", d => {
      const o = { x: source.x, y: source.y };
      return diagonal({ source: o, target: o });
    });

  // Save old positions for transitions
  root.eachBefore(d => {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

/**
 * Expands all nodes
 */
function expandAll() {
  root.each(d => {
    if (d._children) {
      d.children = d._children;
      d._children = null;
    }
  });
  update(null, root);
}

/**
 * Collapses all nodes
 */
function collapseAll() {
  root.each(d => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    }
  });
  update(null, root);
}

let allExpanded = false; 

// Keyboard shortcut: Cmd + Shift + E toggles between fully expanded and collapsed
document.addEventListener('keydown', function(event) {
  if (event.metaKey && event.shiftKey && event.key.toLowerCase() === 'e') {
    event.preventDefault();
    if (allExpanded) {
      collapseAll();
    } else {
      expandAll();
    }
    allExpanded = !allExpanded;
  }
});

// Initial update to render the tree
update(null, root);

// Append the SVG to the DOM
document.getElementById("tree").appendChild(svg.node());
