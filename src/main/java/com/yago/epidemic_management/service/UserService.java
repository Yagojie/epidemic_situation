package com.yago.epidemic_management.service;

import com.github.pagehelper.PageInfo;
import com.yago.epidemic_management.model.dto.AddUserDto;
import com.yago.epidemic_management.model.pojo.User;

/**
 * @Author: Yago
 * @Date: 2022/3/22 10:31
 * Description:
 **/
public interface UserService {
    User selectByPrimaryKey(Integer id);

    User selectByName(String username);

    void register(String mobile, String password);

    User login(String mobile, String password);

    boolean checkAdminRole(User user);

    PageInfo userListForAdmin(Integer pageNum, Integer pageSize);

    PageInfo adminListForAdmin(Integer pageNum, Integer pageSize);

    void addUser(AddUserDto addUserDto);

    void update(User updateUser);

    void deleteUser(Integer id);

    void batchDeleteEgressUser(Integer[] ids, Integer status);
}
