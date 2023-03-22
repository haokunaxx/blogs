---
title: 常见javascript工具方法
date: 2023-03-21
categories:
  - 前端
tags:
  - typescript
  - 方法
---

## 树形结构和扁平数组之间的互相转换
 数据
 ```typescript
  type TreeNode = {
    id: number
    pid: number
    name: string
    children?: Array<TreeNode>
  }

  const arr: Array<TreeNode> = [
    { id: 4, pid: 2, name: 'd' },
    { id: 1, pid: 0, name: 'a' },
    { id: 3, pid: 1, name: 'c' },
    { id: 5, pid: 0, name: 'e' },
    { id: 7, pid: 6, name: 'f' },
    { id: 6, pid: 5, name: 'f' },
    { id: 9, pid: 1, name: 'h' },
    { id: 8, pid: 1, name: 'g' },
    { id: 2, pid: 0, name: 'b' }
  ]
  ```
### 扁平数组 => 树形结构
思路：
1. 递归
2. 使用 Map

#### 递归
```typescript
const toTree = (arr: TreeNode[], rootId: number) => {
  const tree = []
  arr.forEach(
    (item) =>
      item.pid === rootId &&
      tree.push({
        ...item,
        children: toTree(arr, item.id)
      })
  )
  return tree
}
```
#### 借助引用类型的特点 和 Map
```typescript
const toTree = (treeArr: Array<TreeNode>, rootId: number | null = null) => {
  const map = new Map<number, TreeNode>(),
    res: Array<TreeNode> = []
  treeArr.forEach((node) => map.set(node.id, node))
  treeArr.forEach((node) => {
    let { pid } = node,
      parent: TreeNode | undefined
    if (pid === rootId) {
      res.push(node)
      return
    }
    parent = map.get(node.pid)
    if (parent) {
      parent.children ? parent.children.push(node) : (parent.children = [node])
    }
  })
  return res
}
```
### 树形结构 => 扁平数组
思路：
1. 递归
```typescript
const toArray = (tree: Array<TreeNode>): Array<TreeNode> => {
  return tree.reduce((prev: Array<TreeNode>, next: TreeNode) => {
    if (next.children) {
      prev.push(...toArray(next.children as Array<TreeNode>))
      delete next['children']
      prev.push(next)
    } else {
      prev.push(next)
    }
    return prev
  }, [] as Array<TreeNode>)
}
```
