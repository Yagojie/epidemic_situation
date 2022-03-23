package com.yago.epidemic_management.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yago.epidemic_management.exception.ExceptionEnum;
import com.yago.epidemic_management.exception.MyException;
import com.yago.epidemic_management.model.dao.UserMapper;
import com.yago.epidemic_management.model.pojo.User;
import com.yago.epidemic_management.service.UserService;
import com.yago.epidemic_management.utils.MD5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

/**
 * @Author: Yago
 * @Date: 2022/3/22 10:31
 * Description:
 **/
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    /**
     * 测试接口
     *
     * @return
     */
    @Override
    public User selectByPrimaryKey(Integer id) {
        return userMapper.selectByPrimaryKey(id);
    }


    /**
     * 用户注册
     *
     * @param username
     * @param password
     */
    @Override
    public void register(String username, String password) {

        User result = userMapper.selectByName(username);
        if (result != null) {
            throw new MyException(ExceptionEnum.NAME_EXISTED);
        }
        //写到数据库
        User user = new User();
        user.setUsername(username);
        try {
            user.setPassword(MD5Utils.getMD5Str(password));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        //直接输入密码不进行处理，存在安全隐患
        int count = userMapper.insertSelective(user);
        if (count == 0) {
            throw new MyException(ExceptionEnum.INSERT_FAILED);
        }
    }

    /**
     * 用户登录
     *
     * @param username
     * @param password
     * @return
     */
    @Override
    public User login(String username, String password) {
        String md5Password = password;
        try {
            md5Password = MD5Utils.getMD5Str(md5Password);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        User user = userMapper.selectLogin(username, md5Password);
        if (user == null) {
            throw new MyException(ExceptionEnum.WRONG_PASSWORD);
        }
        return user;
    }

    /**
     * 检验是否管理员
     *
     * @param user
     * @return
     */
    @Override
    public boolean checkAdminRole(User user) {
        //0是禁用，1是普通用户，2是管理员
        if (user.getStatus() == null) {
            return false;
        }
        return user.getStatus() == 2;
    }

    /**
     * 查询用户列表
     *
     * @param pageNum
     * @param pageSize
     * @return
     */
    @Override
    public PageInfo userListForAdmin(Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        //做查询工作
        List<User> userList = userMapper.selectList();
        PageInfo pageInfo = new PageInfo(userList);
        return pageInfo;
    }

    /**
     * 更新用户
     *
     * @param updateUser
     */
    @Override
    public void update(User updateUser) {
        User oldUser = userMapper.selectByName(updateUser.getUsername());
        //同名且不同id，不能继续修改
        if (oldUser != null && oldUser.getUserId().equals(updateUser.getUserId())) {
            throw new MyException(ExceptionEnum.NAME_EXISTED);
        }
        int count = userMapper.updateByPrimaryKeySelective(updateUser);
        if (count == 0) {
            throw new MyException(ExceptionEnum.UPDATE_FAILED);
        }
    }

    @Override
    public void changUserStatus(Integer id, Integer newId) {
        userMapper.changUserStatus(id, newId);
    }
}