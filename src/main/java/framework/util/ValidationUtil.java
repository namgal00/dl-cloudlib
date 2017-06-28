package  framework.util;

import java.util.Iterator;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import  framework.exception.SQLException;

/**
 * 
 * @ClassName: ValidationUtil
 * @Description: hibernate validation 验证工具类
 * @author: jinzhaopo
 * @version: V1.0
 * @date: 2017年5月31日 下午9:12:14
 */
public class ValidationUtil {

	/**
	 * 
	 * @Title: validation
	 * @Description: 实体类验证
	 * @param obj
	 * @return: void
	 */
	public static void validation(Object obj) {
		Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

		Set<ConstraintViolation<Object>> constraintViolations = validator.validate(obj);// 验证某个对象,，其实也可以只验证其中的某一个属性的

		Iterator<ConstraintViolation<Object>> iter = constraintViolations.iterator();

		while (iter.hasNext()) {
			ConstraintViolation<Object> next = iter.next();
			String className = next.getRootBeanClass().getName();
			String property = next.getPropertyPath().toString();
			String message = next.getMessage();
			throw new SQLException(className + "-->" + property + ":" + message);
		}
	}
}
