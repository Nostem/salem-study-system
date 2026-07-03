import { visit } from 'unist-util-visit';
import type { Root, Heading } from 'mdast';

// ArticleLayout already renders the frontmatter title as the page <h1>, so a
// leading `# Title` in the markdown body shows the title twice on every wiki
// page. Remove the first depth-1 heading from the body; deeper headings and
// any later h1s (none exist in practice) are left alone.
export default function remarkStripFirstH1() {
  return (tree: Root) => {
    let removed = false;
    visit(tree, 'heading', (node: Heading, index, parent) => {
      if (removed || node.depth !== 1 || parent == null || typeof index !== 'number') return;
      parent.children.splice(index, 1);
      removed = true;
      return false;
    });
  };
}
