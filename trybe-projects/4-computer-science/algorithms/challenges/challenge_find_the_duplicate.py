def find_duplicate(nums):
    if len(nums) < 2:
        return False

    for num in nums:
        if isinstance(num, str) or num < 0:
            return False
        elif nums.count(num) >= 2:
            return num
    return False
