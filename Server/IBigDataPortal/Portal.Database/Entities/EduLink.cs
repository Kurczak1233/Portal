﻿using UserRole.Contracts.UserRoles;

namespace IBigDataPortal.Database.Entities;

public class EduLink : BaseEntity
{
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public User Creator { get; set; } = null!;
    public int CreatorId { get; set; }
    public DateTimeOffset Posted { get; set; }
    public bool IsDeleted { get; set; }
    public int? DeletedBy { get; set; }
    public DateTimeOffset? DeletedOn { get; set; }
    public UserRoles CommentsPermissions { get; set; }
    public UserRoles ArticleVisibilityPermissions { get; set; }
}