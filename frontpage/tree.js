var baseURL = {
    api: 'https://api.github.com/repos/kredep/IT2/',
    raw: 'https://raw.githubusercontent.com/kredep/IT2/master/',
    page: 'https://kredep.github.io/IT2/',
}

async function getSha() {
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', baseURL.api + 'branches', true)
        xhr.onload = function () {
            resolve(
                JSON.parse(this.response)[0].commit.sha
            )
        }
        xhr.send()
    })
}

/**@description Gets the raw treedata */
async function getRawTree() {
    var tree = await getSha()
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', baseURL.api + 'git/trees/' + tree + '?recursive=1', true)
        xhr.onload = function () {
            resolve(JSON.parse(this.response))
        }
        xhr.send()
    })
}

/**@description Parses the raw tree */
function parseTree(rawTree) {
    var tree = { content: {}, sha: rawTree.sha, url: rawTree.url }
    for (let i = 0; i < rawTree.tree.length; i++) {
        const element = rawTree.tree[i];
        /**@type {Array} */
        var path = element.path.split('/')
        if (path[path.length - 1] == 'DESCRIPTION.TXT') {
            getTextFile(element.path).then(loadDesc)
            continue
        }
        var target = tree
        for (let j = 0; j < path.length - 1; j++) {
            target = target.content[path[j]]
        }
        element.content = {}
        target.content[path[path.length - 1]] = element
    }
    return tree
}

/**@description loads the tree to the DOM */
async function loadTree() {
    var tree = parseTree(await getRawTree())
    return new Promise(resolve => {
        var div = document.getElementById('tree')
        /**@param item
         * @param {HTMLElement} parent */
        function loadContent(item, parent, indent) {
            var files = []
            for (const key in item.content) {
                const element = item.content[key];
                /**@description main element (contains name and content) */
                var DOMElement = document.createElement('div')
                DOMElement.classList.add('item')
                DOMElement.id = element.path

                /**@description button to expand a folder */
                var Button = document.createElement('span')
                Button.classList.add('treeButton')
                Button.classList.add('closed')
                DOMElement.appendChild(Button)
                Button.classList.add('glyphicon')
                Button.classList.add('glyphicon-file')
                //if element is a folder
                //set the icon to an arrow and add functionality
                if (element.type == 'tree') {
                    Button.classList.remove('glyphicon-file')
                    Button.classList.add('glyphicon-folder-close')
                    Button.classList.add('folder')
                    Button.classList.remove('treeButton')
                    Button.innerHTML = "";
                    Button.addEventListener('click', e => {
                        //open the folder
                        if (e.target.classList.contains('closed')) {
                            e.path[1].classList.remove('closed')
                            e.target.classList.remove('closed')
                            e.target.classList.add('open')

                            e.target.classList.add('glyphicon-folder-open')
                            e.target.classList.remove('glyphicon-folder-close')

                            //close the folder
                        } else if (e.target.classList.contains('open')) {
                            e.target.classList.remove('open')
                            e.path[1].classList.add('closed')
                            e.target.classList.add('closed')

                            e.target.classList.add('glyphicon-folder-close')
                            e.target.classList.remove('glyphicon-folder-open')

                        }
                    })
                }

                /**@description contains the name of the file/folder */
                var name = document.createElement('div')
                name.innerHTML = element.path.split('/').pop()
                name.dataset.path = element.path
                name.classList.add('name')
                //add a link
                    name.addEventListener('click', e => {
                        if (e.target.previousSibling.classList.contains('glyphicon-file')) {
                            window.open(baseURL.page + e.target.dataset.path)
                        } else if (e.target.previousSibling.classList.contains('folder')) {
                            if (e.target.previousSibling.classList.contains('closed')) {
                                e.path[1].classList.remove('closed')
                                e.target.previousSibling.classList.remove('closed')
                                e.target.previousSibling.classList.add('open')

                                e.target.previousSibling.classList.add('glyphicon-folder-open')
                                e.target.previousSibling.classList.remove('glyphicon-folder-close')

                                //close the folder
                            } else if (e.target.previousSibling.classList.contains('open')) {
                                e.target.previousSibling.classList.remove('open')
                                e.path[1].classList.add('closed')
                                e.target.previousSibling.classList.add('closed')

                                e.target.previousSibling.classList.add('glyphicon-folder-close')
                                e.target.previousSibling.classList.remove('glyphicon-folder-open')

                            }
                        }
                    })
                
                DOMElement.appendChild(name)

                //if folder load the contents
                if (element.type == 'tree') {
                    DOMElement.classList.add('tree')
                    DOMElement.classList.add('closed')
                    parent.appendChild(DOMElement)
                    loadContent(element, DOMElement, indent + 1)
                }
                else {
                    files.push(DOMElement)
                }
            }
            //add files to the end of the list
            for (let i = 0; i < files.length; i++) {
                parent.appendChild(files[i])
            }
        }
        loadContent(tree, div, 1)
        resolve()
    })

}
/**@description gets the text content of a file given a path */
async function getTextFile(path) {
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', baseURL.raw + path, true)
        xhr.onload = function () {
            resolve(this.response)
        }
        xhr.send()
    })
}

loadTree()
