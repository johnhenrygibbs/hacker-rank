function preOrder(root) {

    process.stdout.write(root.data + " ");

    if (root.left) {

        preOrder(root.left);

    }

    if (root.right) {

        preOrder(root.right);

    }

}