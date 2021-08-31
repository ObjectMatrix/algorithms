
class ListNode:
    def __init__(self, data = 0, next = None):
        self.data = data
        self.next = None

def search(head, target):
    if head == None:
        return None
    if head.data == target:
        return head
    if head.next == None:
        return None
    return search(head.next, target)        