function nodeChildCount(node, deep = Infinity) {
    let count = 0;

    function countNodes(node, currentDepth) {
        if (currentDepth <= deep) {
            count += node.childNodes.length;
            node.childNodes.forEach(child => {
                countNodes(child, currentDepth + 1);
            });
        }
    }

    countNodes(node, 0);
    return count;
}



